const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/softeng21-99");
// console.log("connected to database");

const pivotSchema = new mongoose.Schema(
  {
    'Count of v': String,
    p: String,
    field3: String,
    field4: String
  },
  { _id: false, _v: false }
)

module.exports = mongoose.model('Pivot', pivotSchema)