const express = require("express");
const router = express.Router();
const { date_format, date_greater_or_equal } = require("./date_functions");
const fs = require("fs");
const { Visitor } = require("../models/visitor");
let raw_data = fs.readFileSync("./Data/passes.json");
let passes = JSON.parse(raw_data);

router.get("/:op1_ID/:op2_ID/:date_from/:date_to", (req, res) => {
  const { op1_ID, op2_ID, date_from, date_to } = req.params;
  RequestTimestamp = date_format(new Date());
  const PassesAnal = passes.filter(
    (pass) =>
      op1_ID === pass.stationRef.substring(0, 2) &&
      op2_ID === pass.hn &&
      date_greater_or_equal(pass.timestamp, date_from) &&
      date_greater_or_equal(date_to, pass.timestamp)
  );
  PeriodFrom = date_format(date_from);
  PeriodTo = date_format(date_to);

  const PassesList = PassesAnal.map((pass, index) => {
    const { passID, timestamp, vehicleRef, hn, charge } = pass;
    PassIndex = index + 1;
    PassTimeStamp = date_format(timestamp);
    VehicleID = vehicleRef;
    TagProvider = hn;

    Charge = charge;
    return {
      PassIndex,
      passID,
      PassTimeStamp,
      VehicleID,
      TagProvider,
      Charge,
    };
  });
  const NumberOfPasses = Object.keys(PassesAnal).length;
  let newtype = new Visitor(
    op1_ID,
    op2_ID,
    RequestTimestamp,
    PeriodFrom,
    PeriodTo,
    NumberOfPasses,
    PassesList
  );

  res.status(200).send(newtype);
});

module.exports = router;
