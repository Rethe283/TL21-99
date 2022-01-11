const express = require("express");
const router = express.Router();
const { date_format, date_greater_or_equal } = require("./date_functions");
const passes_model = require("../models/passes_model.js");
const time_logger = require("./time_logger");
const _ = require("lodash");
const { PPOList } = require("lodash");
const converter = require("json-2-csv");

router.get(
  "/:op_ID/:date_from/:date_to",
  time_logger,
  async (req, res, next) => {
    const { op_ID, date_from, date_to } = req.params;
    const passes = await passes_model.find({});
    const VisitsByOperator = passes
      .filter(
        (pass) =>
          op_ID === pass.stationRef.substring(0, 2) &&
          date_greater_or_equal(pass.timestamp, PeriodFrom) &&
          date_greater_or_equal(PeriodTo, pass.timestamp) &&
          pass.p === "away"
      )
      .map((pass) => {
        const { hn, charge } = pass;
        Charge = Number(charge);
        VisitingOperator = hn;
        return { VisitingOperator, Charge };
      });

    const byVisitingOperator = _.groupBy(VisitsByOperator, "VisitingOperator");

    const PPOList = Object.keys(byVisitingOperator).map((key) => {
      const count = byVisitingOperator[key].length;
      const sum = byVisitingOperator[key].reduce(
        (acc, it) => acc + it.Charge,
        0
      );

      return {
        VisitingOperator: key,
        CountOfPasses: Number(count.toFixed(0)),
        ChargeSum: Number(sum.toFixed(2)),
      };
    });

    const NumberOfPasses = Object.keys(VisitsByOperator).length;
    const outJson = {
      op_ID,
      NumberOfPasses,
      PPOList,
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
