const express = require("express");
const app = express();
const vehicle_passes = require("./routes/vehicle_passes");
const PassesPerStation = require("./routes/PassesPerStation");
const PassesAnalysis = require("./routes/PassesAnalysis");
const PassesCost = require("./routes/PassesCost");
const ChargesBy = require("./routes/ChargesBy");
// const csvjson = require("./services/JSON2CSV");

app.use("/interoperability/api/PassesAnalysis", PassesAnalysis);
app.use("/interoperability/api/PassesPerStation", PassesPerStation);
app.use("/interoperability/api/PassesCost", PassesCost);
app.use("/interoperability/api/ChargesBy", ChargesBy);
app.use("/interoperability/api/vehicle_passes", vehicle_passes);

app.listen(9130, () => {
  console.log("listening live at 9130");
});
