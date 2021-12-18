const express = require("express");
const app = express();
const fs = require("fs");

const PassesPerStation = require("./routes/PassesPerStation");

app.use("/PassesPerStation", PassesPerStation);

app.listen(9130, () => {
  console.log("listening live at 9130");
});
