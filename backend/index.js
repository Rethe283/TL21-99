const express = require("express");
const app = express();

const PassesPerStation = require("./routes/PassesPerStation");
const PassesAnalysis = require("./routes/PassesAnalysis");

app.use("/PassesAnalysis", PassesAnalysis);
app.use("/PassesPerStation", PassesPerStation);

app.listen(9130, () => {
  console.log("listening live at 9130");
});
