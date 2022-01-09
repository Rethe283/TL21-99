const express = require("express");
const app = express();

const PassesPerStation = require("./routes/PassesPerStation");
const PassesAnalysis = require("./routes/PassesAnalysis");
const PassesCost = require("./routes/PassesCost");
const ChargesBy = require("./routes/ChargesBy");



// data requests functional endpoints routing
app.use("/interoperability/api/PassesAnalysis", PassesAnalysis);
app.use("/interoperability/api/PassesPerStation", PassesPerStation);
app.use("/interoperability/api/PassesCost", PassesCost);
app.use("/interoperability/api/ChargesBy", ChargesBy);



app.listen(9130, () => {
  console.log("listening live at 9130");
});
