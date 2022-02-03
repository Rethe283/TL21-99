
import React from 'react';
import { Link } from 'react-router-dom';

const PaymentResults = () => {
    return (
        <div>
        <h1>Successful Payment</h1>
        <p>
        Return to <Link to="/" className="link">Home</Link> or make another <Link to="/Payment" className="link">Payment</Link>
        </p>
        </div>
    );
};
 export default PaymentResults;