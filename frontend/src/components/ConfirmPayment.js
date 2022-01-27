import { useHistory } from "react-router-dom";

const Confirm = () => {

    const history = useHistory('')
    const handleClick = (e) => {
        e.preventDefault()
        history.push("/redirecting")
    }
    
  return (
    <div className="confirm">
      <h2>Confirm payment</h2>
      <table>
          <td>Operator Debited</td>
          <td>Operator Credited</td>
          <td>Date from</td>
          <td>Date to</td>
          <td>Amount</td>
          
      </table>
      <button type="submit" onClick={handleClick}>Confirm payment</button>
    </div>
  );
};

export default Confirm;