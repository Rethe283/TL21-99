const express = require("express");
const router = express.Router();
const { date_format, date_greater_or_equal } = require("./date_functions");
const time_logger = require("./time_logger");
const passes_model = require("../models/passes_model.js");
const converter = require("json-2-csv");
router.get(
  "/:stationRef/:date_from/:date_to",
  time_logger,
  async (req, res, next) => {
    const { stationRef, date_from, date_to } = req.params;
    const StationOperator = stationRef.substring(0, 2);
    const passes = await passes_model.find({});
    const stationRefPasses = passes.filter(
      (pass) =>
        pass.stationRef === stationRef &&
        date_greater_or_equal(pass.timestamp, PeriodFrom) &&
        date_greater_or_equal(PeriodTo, pass.timestamp)
    );

    const reducedPass = stationRefPasses.map((pass) => {
      const { stationRef } = pass;
      Station = stationRef;

      return { Station };
    });
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

    const NumberOfPasses = Object.keys(reducedPass).length;

    const outJson = {
      Station,
      StationOperator,
      PeriodFrom,
      PeriodTo,
      NumberOfPasses,
      RequestTimestamp,
      PassList,
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
