import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Payment from "./pages/Payment";
import Analysis from "./pages/Analysis";
import ConfirmPayment from "./pages/ConfirmPayment"
import Redirecting from "./pages/Redirecting"
import NotFound from "./pages/404"
import PaymentResults from "./pages/PaymentResults"
import ViewshortAnalysis from "./pages/ViewshortAnalysis";
import ViewlongAnalysis from "./pages/ViewlongAnalysis";
import ChargesBy from "./pages/ChargesBy";
import ChargesByResults from "./pages/ChargesByResults";
import PassesCost from "./pages/PassesCost";
import PassesCostResults from "./pages/PassesCostResults";
import PassesPerStation from "./pages/PassesPerStation";
import PassesPerStationResults from "./pages/PassesPerStationResults";
import VehiclePasses from "./pages/VehiclePasses";
import VehiclePassesResults from "./pages/VehiclePassesResults";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/payment">
              <Payment></Payment>
            </Route>
            <Route exact path="/paymentresults">
              <PaymentResults></PaymentResults>
            </Route>
            <Route exact path="/analysis">
              <Analysis></Analysis>
            </Route>
            <Route exact path="/viewshortanalysis">
              <ViewshortAnalysis></ViewshortAnalysis>
            </Route>
            <Route exact path="/viewlonganalysis">
              <ViewlongAnalysis></ViewlongAnalysis>
            </Route>
            <Route exact path='/confirmpayment'>
              <ConfirmPayment></ConfirmPayment>
            </Route>
            <Route exact path='/chargesby'>
              <ChargesBy></ChargesBy>
            </Route>
            <Route exact path='/chargesbyresults'>
              <ChargesByResults></ChargesByResults>
            </Route>
            <Route exact path='/passescost'>
              <PassesCost></PassesCost>
            </Route>
            <Route exact path='/passescostresults'>
              <PassesCostResults></PassesCostResults>
            </Route>
            <Route exact path='/passesperstation'>
              <PassesPerStation></PassesPerStation>
            </Route>
            <Route exact path='/passesperstationresults'>
              <PassesPerStationResults></PassesPerStationResults>
            </Route>
            <Route exact path='/vehiclepasses'>
              <VehiclePasses></VehiclePasses>
            </Route>
            <Route exact path='/vehiclepassesresults'>
              <VehiclePassesResults></VehiclePassesResults>
            </Route>
            <Route exact path='/redirecting'>
              <Redirecting></Redirecting>
            </Route>
            <Route exact path='/404'>
              <NotFound></NotFound>
            </Route>
            <Redirect to="/404"/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
