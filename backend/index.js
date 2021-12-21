const express = require("express");
const app = express();

const PassesPerStation = require("./routes/PassesPerStation");
const PassesAnalysis = require("./routes/PassesAnalysis");
const PassesCost = require("./routes/PassesCost");
const ChargesBy = require("./routes/ChargesBy");

app.use("/PassesAnalysis", PassesAnalysis);
app.use("/PassesPerStation", PassesPerStation);
app.use("/PassesCost", PassesCost);
app.use("/ChargesBy", ChargesBy);

app.listen(9130, () => {
  console.log("listening live at 9130");
});
