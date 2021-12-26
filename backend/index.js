const express = require("express");
const app = express();

const PassesPerStation = require("./routes/PassesPerStation");
const PassesAnalysis = require("./routes/PassesAnalysis");
const PassesCost = require("./routes/PassesCost");
const ChargesBy = require("./routes/ChargesBy");

const healthcheck = require("./routes/admin/healthcheck.js")
const resetpasses = require("./routes/admin/resetpasses.js")
const resetstations = require("./routes/admin/resetstations.js")
const resetvehicles = require("./routes/admin/resetvehicles.js")
// const csvjson = require("./services/JSON2CSV");

// data requests functional endpoints routing
app.use("/interoperability/api/PassesAnalysis", PassesAnalysis);
app.use("/interoperability/api/PassesPerStation", PassesPerStation);
app.use("/interoperability/api/PassesCost", PassesCost);
app.use("/interoperability/api/ChargesBy", ChargesBy);

// admin endpoints routing
app.use("/interoperability/api/admin/healthcheck", healthcheck)
app.use("/interoperability/api/admin/resetpasses", resetpasses)
app.use("/interoperability/api/admin/resetstations", resetstations)
app.use("/interoperability/api/admin/resetvehicles", resetvehicles)

app.listen(9130, () => {
  console.log("listening live at 9130");
});
