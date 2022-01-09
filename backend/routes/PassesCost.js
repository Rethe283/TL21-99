const express = require("express");
const router = express.Router();
const { date_format, date_greater_or_equal } = require("./date_functions");
const converter = require("json-2-csv");
const time_logger = require("./time_logger");
//danger
const passes_model = require("../models/passes_model.js");
//danger
router.get(
  "/:op1_ID/:op2_ID/:date_from/:date_to",
  time_logger,
  async (req, res, next) => {
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
    PassesCost = PassesCost.toFixed(2);

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

    if (req.query.format === "csv") {
      converter.json2csv(outJson, function (err, csv) {
        if (err) {
          throw err;
        }
        return res.send(csv);
      });
    } else {
      res.status(200).send(outJson);
    }
  }
);

module.exports = router;
