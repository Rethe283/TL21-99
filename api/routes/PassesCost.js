const express = require("express");
const router = express.Router();
const {
  date_format,
  date_greater_or_equal,
} = require("./utilities/date_functions");
const converter = require("json-2-csv");
const time_logger = require("./utilities/time_logger");
const { providerVerification } = require("./utilities/url_param_ver.js");
//danger
const passes_model = require("../../backend/models/passes_model.js");
//danger
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
    let PassesCost = 0;
    const passes = await passes_model.find({});
    const PassesAnal = passes
      .filter(
        (pass) =>
          op1_ID === pass.stationRef.substring(0, 2) &&
          op2_ID === pass.hn &&
          date_greater_or_equal(pass.timestamp, PeriodFrom) &&
          date_greater_or_equal(PeriodTo, pass.timestamp)
      )
      .map((pass) => {
        const { charge } = pass;
        Charge = Number(charge);
        PassesCost += Charge;
        return {
          Charge,
        };
      });
    PassesCost = Number(PassesCost.toFixed(2));

    const NumberOfPasses = Object.keys(PassesAnal).length;
    const outJson = {
      op1_ID,
      op2_ID,
      RequestTimestamp,
      PeriodFrom,
      PeriodTo,
      NumberOfPasses,
      PassesCost,
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
