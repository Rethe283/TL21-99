const moment = require("moment");

const {
  date_format,
  date_greater_or_equal,
  weird_date_format,
} = require("./date_functions");

const time_logger = (req, res, next) => {
  RequestTimestamp = date_format(new Date());

  PeriodFrom = weird_date_format(req.params.date_from);
  PeriodTo = weird_date_format(req.params.date_to);

  Time_validation =
    moment(req.params.date_from, "YYYYMMDD", true).isValid() &&
    moment(req.params.date_to, "YYYYMMDD", true).isValid();

  next();
};

module.exports = time_logger;
