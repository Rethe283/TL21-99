class Visitor {
  constructor(
    op1_ID,
    op2_ID,
    RequestTimestamp,
    PeriodFrom,
    PeriodTo,
    NumberOfPasses,
    PassesList
  ) {
    this.op1_ID = op1_ID;
    this.op2_ID = op2_ID;
    this.RequestTimestamp = RequestTimestamp;
    this.PeriodFrom = PeriodFrom;
    this.PeriodTo = PeriodTo;
    this.NumberOfPasses = NumberOfPasses;
    this.PassesList = PassesList;
  }
}
module.exports = { Visitor };
