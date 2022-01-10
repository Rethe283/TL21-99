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

// const pivotSchema = new mongoose.Schema({
//   'Count of v': String,
//   p: String,
//   field3: String,
//   field4: String
// })

// const stationSchema = new mongoose.Schema({
//   stationID: String,
//   stationProvider: String,
//   stationName: String,
// })

// const vehiclesShema = new mongoose.Schema({
//   vehicleId: String,
//   tagID: String,
//   tagProvider: String,
//   providerAbbr: String,
//   licenceYear: String
// })


// const Passes = mongoose.model('Pass', Passes)
// const Pivot = mongoose.model('Pivot', pivotSchema)
// const Station = mongoose.model('Station', stationSchema)
// const Vehicles = mongoose.model('Vehicles', vehiclesShema)

// module.exports = { Passes, Pivot, Station, Vehicles }


module.exports = mongoose.model("Pass", Passes);
