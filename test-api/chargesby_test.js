//https://localhost:9130/interoperability/api/ChargesBy/EG/20190101/20200101

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

// pm.test("Body is correct", function () {
//     pm.response.to.have.body('{"op_ID":"EG","NumberOfPasses":343,"PPOList":[{"VisitingOperator":"GF","CountOfPasses":71,"ChargeSum":166.1},{"VisitingOperator":"NE","CountOfPasses":65,"ChargeSum":125.05},{"VisitingOperator":"OO","CountOfPasses":62,"ChargeSum":138.6},{"VisitingOperator":"MR","CountOfPasses":42,"ChargeSum":87.4},{"VisitingOperator":"AO","CountOfPasses":46,"ChargeSum":83.85},{"VisitingOperator":"KO","CountOfPasses":57,"ChargeSum":111.85}]}');
// });

const jsonData = pm.response.json();

pm.test("Test data type of the response", () => {
  pm.expect(jsonData).to.be.an("object");
  pm.expect(jsonData.op_ID).to.be.a("string");
  pm.expect(jsonData.NumberOfPasses).to.be.a("number");
  pm.expect(jsonData.PPOList).to.be.an("array");
});

