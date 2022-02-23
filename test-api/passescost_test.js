//https://localhost:9130/interoperability/api/PassesCost/EG/EG/20180101/20190404

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
//     pm.response.to.have.body('{"op1_ID":"EG","op2_ID":"EG","RequestTimestamp":"2022-2-18 1:37:56","PeriodFrom":"2018-01-01","PeriodTo":"2019-04-04","NumberOfPasses":323,"PassesCost":786}');
// });

const jsonData = pm.response.json();

pm.test("Test data type of the response", () => {
  pm.expect(jsonData).to.be.an("object");
  pm.expect(jsonData.op1_ID).to.be.a("string");
  pm.expect(jsonData.op2_ID).to.be.a("string");
  pm.expect(jsonData.RequestTimestamp).to.be.a("string");
  pm.expect(jsonData.PeriodFrom).to.be.a("string");
  pm.expect(jsonData.PeriodFrom).to.be.a("string");
  pm.expect(jsonData.NumberOfPasses).to.be.a("number");
  pm.expect(jsonData.PassesCost).to.be.a("number");
});
