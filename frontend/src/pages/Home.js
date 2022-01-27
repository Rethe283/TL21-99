// import React from 'react';
// import { Link } from 'react-router-dom';


// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to IntraPass</h1>
//       <p>
//       You can use this web app to view our <Link to="/Analysis" className="link">Analysis</Link> and make <Link to="/Payment" className="link">Payments</Link>
//       </p>
//     </div>
//   );
// };

// export default Home;
import useFetch from "../useFetch";

const Home = () => {
  const { error, isPending, data } = useFetch(
    "http://localhost:9130/interoperability/api/ChargesBy/EG/20190101/20200101"
  );

  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <div>
          <p>This is intraPass</p>
          <p>{data}</p>
        </div>
      )}
    </div>
  );
};

export default Home;