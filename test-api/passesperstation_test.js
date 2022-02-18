//http://localhost:9130/interoperability/api/PassesPerStation/EG01/20190101/20200606

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
  pm.expect(jsonData.Station).to.be.a("string");
  pm.expect(jsonData.StationOperator).to.be.a("string");
  pm.expect(jsonData.PeriodFrom).to.be.a("string");
  pm.expect(jsonData.PeriodTo).to.be.a("string");
  pm.expect(jsonData.NumberOfPasses).to.be.a("number");
  pm.expect(jsonData.RequestTimestamp).to.be.a("string"); 
  pm.expect(jsonData.PassList).to.be.an("array")
});