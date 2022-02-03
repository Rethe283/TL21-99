const Redirecting = () => {
   setTimeout(function() {
      window.location.replace('http://localhost:3000/paymentresults');
    }, 4000);
   return <h2>Sending Payment...</h2>;
};

export default Redirecting;
