const express = require("express");
const router = express.Router();
const {
  date_format,
  date_greater_or_equal,
} = require("./utilities/date_functions");
const passes_model = require("../models/passes_model.js");
const time_logger = require("./utilities/time_logger");
const _ = require("lodash");
const { VisitsList } = require("lodash");
const converter = require("json-2-csv");

router.get(
  "/:vehicleID/:date_from/:date_to",
  time_logger,
  async (req, res, next) => {
    if (
      req.params.vehicleID === null ||
      PeriodFrom > PeriodTo ||
      !Time_validation
    ) {
      res.sendStatus(400);
      return;
    }
    const { vehicleID, date_from, date_to } = req.params;
    const passes = await passes_model.find({});
    const VisitsbyVehicle = passes
      .filter(
        (pass) =>
          vehicleID === pass.vehicleRef &&
          date_greater_or_equal(pass.timestamp, PeriodFrom) &&
          date_greater_or_equal(PeriodTo, pass.timestamp)
      )
      .map((pass) => {
        const { stationRef, charge } = pass;
        Charge = Number(charge);
        StationOperator = stationRef.substring(0, 2);
        return { StationOperator, Charge };
      });

    const byVisitingVehicle = _.groupBy(VisitsbyVehicle, "StationOperator");

    const VisitsList = Object.keys(byVisitingVehicle).map((key) => {
      const count = byVisitingVehicle[key].length;
      const sum = byVisitingVehicle[key].reduce(
        (acc, it) => acc + it.Charge,
        0
      );
      return {
        StationOperator: key,
        CountOfPasses: count.toFixed(0),
        ChargeSum: sum.toFixed(2),
      };
    });

    const NumberOfPasses = Object.keys(VisitsbyVehicle).length;
    //fixing data types/ converting from string to number
    let sum = 0;
    let TotalAmountCharged = 0;
    let Amountperstation = 0;
    const VisitsPerStation = VisitsList.map((pass) => {
      const { StationOperator, CountOfPasses, ChargeSum } = pass;
      Charged = Number(ChargeSum);
      PassesCount = Number(CountOfPasses);

      ChargePerStation = Number(Charged.toFixed(2));

      return { StationOperator, PassesCount, ChargePerStation };
    });
    VisitsPerStation.map((pass) => {
      sum += pass.ChargePerStation;
      TotalAmountCharged = Number(sum.toFixed(2));
      return;
    });

    const outJson = {
      vehicleID,
      NumberOfPasses,
      TotalAmountCharged,
      VisitsPerStation,
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
