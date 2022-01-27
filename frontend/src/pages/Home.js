import React from 'react';
import { Link } from 'react-router-dom';


const MainPage = () => {
  return (
    <div>
      <h1>Welcome to IntraPass</h1>
      <p>
      You can use this web app to view our <Link to="/Analysis" className="link">Analysis</Link> and make <Link to="/Payment" className="link">Payments</Link>
      </p>
    </div>
  );
};

export default MainPage;