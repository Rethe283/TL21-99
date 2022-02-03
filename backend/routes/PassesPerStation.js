const express = require("express");
const router = express.Router();
const {
  date_format,
  date_greater_or_equal,
} = require("./utilities/date_functions");
const time_logger = require("./utilities/time_logger");
const passes_model = require("../models/passes_model.js");
const converter = require("json-2-csv");
const { stationIDverification } = require("./utilities/url_param_ver.js");
router.get(
  "/:stationRef/:date_from/:date_to",
  time_logger,
  stationIDverification,
  async (req, res, next) => {
    if (!Stationexists || PeriodFrom > PeriodTo || !Time_validation) {
      res.sendStatus(400);
      return;
    }
    const { stationRef, date_from, date_to } = req.params;
    const StationOperator = stationRef.substring(0, 2);
    const passes = await passes_model.find({});
    const stationRefPasses = passes.filter(
      (pass) =>
        pass.stationRef === stationRef &&
        date_greater_or_equal(pass.timestamp, PeriodFrom) &&
        date_greater_or_equal(PeriodTo, pass.timestamp)
    );

    let Station = stationRef;
    const PassList = stationRefPasses.map((pass, index) => {
      const { passID, timestamp, vehicleRef, hn, p, charge } = pass;
      PassTimeStamp = date_format(timestamp);
      PassIndex = index + 1;
      VehicleID = vehicleRef;
      TagProvider = hn;
      PassType = p;
      if (p === "away") {
        PassType = "visitor";
      }
      PassCharge = Number(charge);
      return {
        PassIndex,
        passID,
        PassTimeStamp,
        VehicleID,
        TagProvider,
        PassType,
        PassCharge,
      };
    });

    const NumberOfPasses = Object.keys(stationRefPasses).length;

    const outJson = {
      Station,
      StationOperator,
      PeriodFrom,
      PeriodTo,
      NumberOfPasses,
      RequestTimestamp,
      PassList,
    };

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
