import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import Home from './Home';
import PaymentData from '../components/PaymentData';

const Payment = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/payment/data" component={PaymentData}/>
                    <Redirect to="/payment"/>
                </Switch>
            </Router>
        </div>
    )
}

export default Payment;
