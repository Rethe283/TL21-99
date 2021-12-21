const {
  date_format,
  date_greater_or_equal,
  weird_date_format,
} = require("./date_functions");

const time_logger = (req, res, next) => {
  RequestTimestamp = date_format(new Date());

  // if (req.params.date_from.length === 14) {
  //   tempfrom = weird_date_format(req.params.date_from);
  //   tempto = weird_date_format(req.params.date_to);
  // } else {
  //   tempfrom = req.params.date_from;
  //   req.params.date_to;
  // } ,maybe?
  // const a = "1995524114000";
  // const b = weird_date_format(a);
  // const c = new Date(Number(b));
  PeriodFrom = date_format(req.params.date_from);
  PeriodTo = date_format(req.params.date_to);
  // PeriodFrom = weird_date_format(a);
  // PeriodTo = weird_date_format(a);
  console.log(RequestTimestamp, PeriodFrom, PeriodTo);
  next();
};

module.exports = time_logger;
