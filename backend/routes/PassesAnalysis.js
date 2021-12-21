const express = require("express");
const router = express.Router();
const { date_format, date_greater_or_equal } = require("./date_functions");
const fs = require("fs");
const { Visitor } = require("../models/visitor");
let raw_data = fs.readFileSync("./Data/passes.json");
let passes = JSON.parse(raw_data);
const time_logger = require("./time_logger");
const converter = require("json-2-csv");

router.get("/:op1_ID/:op2_ID/:date_from/:date_to", time_logger, (req, res) => {
  const { op1_ID, op2_ID, date_from, date_to } = req.params;

  const PassesAnal = passes.filter(
    (pass) =>
      op1_ID === pass.stationRef.substring(0, 2) &&
      op2_ID === pass.hn &&
      date_greater_or_equal(pass.timestamp, PeriodFrom) &&
      date_greater_or_equal(PeriodTo, pass.timestamp)
  );

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
  let outJson = new Visitor(
    op1_ID,
    op2_ID,
    RequestTimestamp,
    PeriodFrom,
    PeriodTo,
    NumberOfPasses,
    PassesList
  );

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
});

module.exports = router;
