const express = require("express");
const router = express.Router();
const { date_format, date_greater_or_equal } = require("./date_functions");
const time_logger = require("./time_logger");
const fs = require("fs");
let raw_data = fs.readFileSync("./Data/passes.json");
let passes = JSON.parse(raw_data);

router.get("/:stationRef/:date_from/:date_to", time_logger, (req, res) => {
  console.log(req.params);
  const { stationRef, date_from, date_to } = req.params;
  const StationOperator = stationRef.substring(0, 2);

  const stationRefPasses = passes.filter(
    (pass) =>
      pass.stationRef === stationRef &&
      date_greater_or_equal(pass.timestamp, date_from) &&
      date_greater_or_equal(date_to, pass.timestamp)
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
    PassCharge = charge;
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

  const megaJSON = {
    Station,
    StationOperator,
    PeriodFrom,
    PeriodTo,
    NumberOfPasses,
    RequestTimestamp,
    PassList,
  };
  res.status(200).json(megaJSON);
});

module.exports = router;
