const express = require("express");
const router = express.Router();
const {
  date_format,
  date_greater_or_equal,
} = require("./utilities/date_functions");
const passes_model = require("../../backend/models/passes_model.js");
const { Visitor } = require("../../backend/models/visitor");
const { providerVerification } = require("./utilities/url_param_ver.js");

const time_logger = require("./utilities/time_logger");
const converter = require("json-2-csv");

router.get(
  "/:op1_ID/:op2_ID/:date_from/:date_to",
  time_logger,
  providerVerification,
  async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    if (!ProvidersExist || PeriodFrom > PeriodTo || !Time_validation) {
      res.sendStatus(400);
      return;
    }
    const { op1_ID, op2_ID, date_from, date_to } = req.params;
    const passes = await passes_model.find({});
    const PassesAnal = passes.filter(
      (pass) =>
        op1_ID === pass.stationRef.substring(0, 2) &&
        op2_ID === pass.hn &&
        date_greater_or_equal(pass.timestamp, PeriodFrom) &&
        date_greater_or_equal(PeriodTo, pass.timestamp)
    );

    const PassesList = PassesAnal.map((pass, index) => {
      const { passID, timestamp, vehicleRef, stationRef, charge } = pass;
      PassIndex = index + 1;
      PassTimeStamp = date_format(timestamp);
      VehicleID = vehicleRef;
      StationID = stationRef;

      Charge = Number(charge);
      return {
        PassIndex,
        passID,
        StationID,
        PassTimeStamp,
        VehicleID,
        Charge,
      };
    });
    const NumberOfPasses = Object.keys(PassesAnal).length;
    let outJson = new Visitor(
      op1_ID,
      op2_ID,
      RequestTimestamp,
      PeriodFrom,
      PeriodTo,
      NumberOfPasses,
      PassesList
    );

    let stat = 200;
    if (NumberOfPasses === 0) {
      stat = 402;
    }
    if (req.query.format === "csv") {
      converter.json2csv(outJson, function (err, csv) {
        if (err) {
          throw err;
        }
        return res.status(stat).send(csv);
      });
    } else {
      res.status(stat).send(outJson);
    }
  }
);

module.exports = router;
