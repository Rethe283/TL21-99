const express = require("express");
const router = express.Router();
const {
  date_format,
  date_greater_or_equal,
} = require("./utilities/date_functions");
const converter = require("json-2-csv");
const time_logger = require("./utilities/time_logger");
const { providerVerification } = require("./utilities/url_param_ver.js");

const passes_model = require("../models/passes_model.js");
const { message_settlement } = require("./utilities/settlementhelper");
//danger
router.get(
  "/:op1_ID/:op2_ID/:date_from/:date_to",
  time_logger,
  providerVerification,
  async (req, res, next) => {
    if (!ProvidersExist || PeriodFrom > PeriodTo) {
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
    PassesCost = PassesCost.toFixed(2);
    let PassesCost2 = 0;
    const PassesAnal2 = passes
      .filter(
        (pass) =>
          op2_ID === pass.stationRef.substring(0, 2) &&
          op1_ID === pass.hn &&
          date_greater_or_equal(pass.timestamp, PeriodFrom) &&
          date_greater_or_equal(PeriodTo, pass.timestamp)
      )
      .map((pass) => {
        const { charge } = pass;
        Charge = Number(charge);
        PassesCost2 += Charge;
        return {
          Charge,
        };
      });
    PassesCost2 = PassesCost2.toFixed(2);

    let Financial_Settlement = message_settlement(
      PassesCost,
      PassesCost2,
      op1_ID,
      op2_ID
    );
    let outJson = {
      PeriodFrom,
      PeriodTo,
      Financial_Settlement,
    };
    if (req.query.format === "csv") {
      converter.json2csv(outJson, function (err, csv) {
        if (err) {
          throw err;
        }
        return res.status(200).send(csv);
      });
    } else {
      res.status(200).json(outJson);
    }
  }
);

module.exports = router;
