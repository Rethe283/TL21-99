//http://localhost:9130/interoperability/api/PassesAnalysis/EG/KO/20100101/20200101

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

const jsonData = pm.response.json();

pm.test("Test data type of the response", () => {
  pm.expect(jsonData).to.be.an("object");
  pm.expect(jsonData.op1_ID).to.be.a("string");
  pm.expect(jsonData.op2_ID).to.be.a("string");
  pm.expect(jsonData.RequestTimestamp).to.be.a("string");
  pm.expect(jsonData.PeriodFrom).to.be.a("string");
  pm.expect(jsonData.PeriodTo).to.be.a("string");
  pm.expect(jsonData.NumberOfPasses).to.be.a("number");
  pm.expect(jsonData.PassesList).to.be.an("array")
});