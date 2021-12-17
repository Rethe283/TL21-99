const express = require("express");
const app = express();
const { date_format, date_greater_or_equal } = require("./date_functions");
const fs = require("fs");
let raw_data = fs.readFileSync("./Data/passes.json");
let passes = JSON.parse(raw_data);

app.get("/", (req, res) => {
  const reducedPass = passes.map((pass) => {
    const { stationRef, timestamp } = pass;
    return { stationRef, timestamp };
  });
  res.json(reducedPass);
});

app.get("/:stationRef/:date_from/:date_to", (req, res) => {
  const { stationRef, date_from, date_to } = req.params;

  const stationRefPasses = passes.filter(
    (pass) =>
      pass.stationRef === stationRef &&
      date_greater_or_equal(pass.timestamp, date_from) &&
      date_greater_or_equal(date_to, pass.timestamp)
  );
  PeriodFrom = date_format(date_from);
  PeriodTo = date_format(date_to);
  const reducedPass = stationRefPasses.map((pass) => {
    const { stationRef, hn } = pass;
    Station = stationRef;
    StationProvider = hn;
    RequestTimestamp = date_format(new Date());
    return { Station, StationProvider };
  });
  const stringy_json = JSON.stringify(reducedPass);
  res
    .status(200)
    .send(
      "RequestTimestamp" +
        " \n ||" +
        RequestTimestamp +
        " \n ||" +
        "PeriodFrom" +
        PeriodFrom +
        " \n ||" +
        "PeriodTo" +
        PeriodTo +
        " \n ||" +
        stringy_json
    );
});

app.all("*", (req, res) => {
  res.status(404).send(`<h1> ERROR 404 </h1>
  return to the main page
  <a ref='/' HOME PAGE </a >`);
});

app.listen(8000, () => {
  console.log("listening live at 8000");
});
