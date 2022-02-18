//http://localhost:9130/interoperability/api/settlement/EG/OO/20180101/20190404

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
  pm.expect(jsonData.PeriodFrom).to.be.a("string");
  pm.expect(jsonData.PeriodTo).to.be.a("string");
  pm.expect(jsonData.Financial_Settlement).to.be.a("string"); 
});