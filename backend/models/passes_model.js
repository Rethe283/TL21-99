const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/softeng21-99");

const Passes = new mongoose.Schema(
  {
    passID: String,
    timestamp: String,
    stationRef: String,
    vehicleRef: String,
    charge: String,
    t: String,
    v: String,
    hn: String,
    p: String,
  },
  { _id: false, _v: false }
);

module.exports = mongoose.model("Pass", Passes);
