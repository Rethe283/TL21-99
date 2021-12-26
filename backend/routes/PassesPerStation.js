const express = require("express");
const router = express.Router();
const {date_format, date_greater_or_equal} = require("./date_functions")
const fs = require("fs");
let raw_data = fs.readFileSync("./Data/passes.json");
let passes = JSON.parse(raw_data);

router.get("/:stationRef/:date_from/:date_to", (req, res) => {
  const { stationRef, date_from, date_to } = req.params;
  const StationOperator = stationRef.substring(0, 2);
  RequestTimestamp = date_format(new Date());
  const stationRefPasses = passes.filter(
    (pass) =>
      pass.stationRef === stationRef &&
      date_greater_or_equal(pass.timestamp, date_from) &&
      date_greater_or_equal(date_to, pass.timestamp)
  );
  PeriodFrom = date_format(date_from);
  PeriodTo = date_format(date_to);
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
    if (p === "home") {
      PassType = "home";
    } else {
      Passtype = "visitor";
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

router.all("*", (req, res) => {
  res.status(404).send(`<h1> ERROR 404 </h1>
    return to the main page
    <a ref='/' HOME PAGE </a >`);
});
module.exports = router;
