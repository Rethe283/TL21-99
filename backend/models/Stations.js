const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/softeng21-99");

const stationSchema = new mongoose.Schema({
    stationID: String,
    stationProvider: String,
    stationName: String,
    },
    { _id: false, _v: false }   
)

module.exports = mongoose.model('Station', stationSchema)