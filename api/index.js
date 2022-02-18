const fs = require('fs');
const key = fs.readFileSync("./certificates/localhost.decrypted.key");
const cert = fs.readFileSync("./certificates/localhost.crt");

const express = require("express");
const app = express();

const https = require('https');
const server = https.createServer({ key, cert}, app);

const vehicle_passes = require("./routes/vehicle_passes");
const PassesPerStation = require("./routes/PassesPerStation");
const PassesAnalysis = require("./routes/PassesAnalysis");
const PassesCost = require("./routes/PassesCost");
const ChargesBy = require("./routes/ChargesBy");
const settlement = require("./routes/settlement");
// const csvjson = require("./services/JSON2CSV");

// admin endpoints include
const healthcheck = require("../backend/routes/admin/healthcheck");
const resetpasses = require("../backend/routes/admin/resetpasses");
const resetstations = require("../backend/routes/admin/resetstations");
const resetvehicles = require("../backend/routes/admin/resetvehicles");
const PassesUpdate = require("../backend/routes/admin/PassesUpdate");

app.use("/interoperability/api/ChargesBy", ChargesBy);
app.use("/interoperability/api/PassesAnalysis", PassesAnalysis);
app.use("/interoperability/api/PassesPerStation", PassesPerStation);
app.use("/interoperability/api/PassesCost", PassesCost);
app.use("/interoperability/api/vehicle_passes", vehicle_passes);
app.use("/interoperability/api/settlement", settlement);

// admin endpoints routing
app.use("/interoperability/api/admin/healthcheck", healthcheck);
app.use("/interoperability/api/admin/resetpasses", resetpasses);
app.use("/interoperability/api/admin/resetstations", resetstations);
app.use("/interoperability/api/admin/resetvehicles", resetvehicles);
app.use("/interoperability/api/admin/PassesUpdate", PassesUpdate);

//app.listen(9130, () => {
server.listen(9130, () => {
console.log("listening live at 9130");
});
