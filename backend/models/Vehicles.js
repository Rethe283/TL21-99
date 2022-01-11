const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/softeng21-99");

const vehiclesShema = new mongoose.Schema({
    vehicleId: String,
    tagID: String,
    tagProvider: String,
    providerAbbr: String,
    licenceYear: String
    },
    { _id: false, _v: false }
)

module.exports = mongoose.model("Vehicles", vehiclesShema)