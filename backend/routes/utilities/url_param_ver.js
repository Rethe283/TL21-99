const stationsdata = require("../../Data/stations.json");

function stationCheck(statID) {
  found = stationsdata.find((ID) => ID.stationID === statID);
  if (found != null) {
    return true;
  } else {
    return false;
  }
}
const stationIDverification = async (req, res, next) => {
  found = stationsdata.find((ID) => ID.stationID === req.params.stationRef);
  Stationexists = found != null;
  next();
};
const providerVerification = async (req, res, next) => {
  found = stationsdata.find(
    (ID) => ID.stationID.substring(0, 2) === req.params.op1_ID
  );
  found2 = stationsdata.find(
    (ID) => ID.stationID.substring(0, 2) === req.params.op2_ID
  );
  ProvidersExist = found != null && found2 != null;
  next();
};
const single_provider_verification = async (req, res, next) => {
  found = stationsdata.find(
    (ID) => ID.stationID.substring(0, 2) === req.params.op_ID
  );
  ProviderExists = found != null;
  next();
};
module.exports = {
  stationCheck,
  stationIDverification,
  providerVerification,
  single_provider_verification,
};
