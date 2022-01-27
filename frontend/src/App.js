import Navbar from "./Navbar";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Payment from "./Payment";
import Analysis from "./Analysis";
import ConfirmPayment from "./ConfirmPayment"
import Redirect from "./Redirect"

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
            <Route path="/analysis">
              <Analysis></Analysis>
            </Route>
            <Route path='/confirmPayment'>
              <ConfirmPayment></ConfirmPayment>
            </Route>
            <Route path='/redirecting'>
              <Redirect></Redirect>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
