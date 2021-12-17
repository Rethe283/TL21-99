const express = require("express");
const app = express();

const fs = require("fs");
// const passes = require("./Data/passes.json");
let raw_data = fs.readFileSync("./Data/passes.json");
let passes = JSON.parse(raw_data);

function date_format(string_format) {
  const date_to_string = new Date(string_format);

  const day = date_to_string.getDate();
  const year = date_to_string.getFullYear();
  const month = date_to_string.getMonth() + 1;
  const hours = date_to_string.getHours();
  const minutes = date_to_string.getMinutes();
  const seconds = date_to_string.getSeconds();
  return (
    year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds
  );
}

function date_greater_or_equal(first_date, second_date) {
  const first_date_to_compare = new Date(first_date).getTime();
  const second_date_to_compare = new Date(second_date).getTime();

  return first_date_to_compare >= second_date_to_compare;
}
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
