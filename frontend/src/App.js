import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Payment from "./pages/Payment";
import Analysis from "./pages/Analysis";
import NotFound from './pages/404';
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
            <Route exact path="/404">
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
