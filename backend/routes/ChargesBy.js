const express = require("express");
const router = express.Router();
const { date_format, date_greater_or_equal } = require("./date_functions");
const fs = require("fs");
let raw_data = fs.readFileSync("./Data/passes.json");
let passes = JSON.parse(raw_data);
const time_logger = require("./time_logger");
const _ = require("lodash");
const { PPOList } = require("lodash");

router.get("/:op_ID/:date_from/:date_to", time_logger, (req, res) => {
  const { op_ID, date_from, date_to } = req.params;

  const VisitsByOperator = passes
    .filter(
      (pass) =>
        op_ID === pass.stationRef.substring(0, 2) &&
        date_greater_or_equal(pass.timestamp, date_from) &&
        date_greater_or_equal(date_to, pass.timestamp) &&
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
    const sum = byVisitingOperator[key].reduce((acc, it) => acc + it.Charge, 0);
    return {
      VisitingOperator: key,
      CountOfPasses: count,
      ChargeSum: sum,
    };
  });

  const NumberOfPasses = Object.keys(VisitsByOperator).length;
  const ultraJson = {
    op_ID,
    NumberOfPasses,
    PPOList,
  };

  res.status(200).send(ultraJson);
});

module.exports = router;
