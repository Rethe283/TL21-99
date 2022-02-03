import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useFetch from "../useFetch";

function useQuery() {
  const {search} = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Confirm = () => {
    let query = useQuery();

    const history = useHistory('')
    const handleClick1 = (e) => {
        e.preventDefault()
        history.push("/redirecting")
    }
    const handleClick2 = (e) => {
      e.preventDefault()
      history.push("/payment")
  }
  const handleClick3 = (e) => {
    e.preventDefault()
    history.push("/")
}
    const { error, isPending, data } = useFetch(
      `http://localhost:9130/interoperability/api/settlement/${query.get("operator1")}/${query.get("operator2")}/${query.get("datefrom")}/${query.get("dateto")}`
    );
    
  return (
    <div className="confirm">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <div className="confirm">
        <h2>Confirm payment</h2>
        <table>
            <td>{data.Financial_Settlement}</td>
        </table>
        <button type="submit" onClick={handleClick1}>Confirm payment</button>
        <button type="submit" onClick={handleClick2}>Make A New Payment</button>
        <div/>
        <button type="submit" onClick={handleClick3}>Return To Home</button>
      </div>
      )}
    </div>
  );
};

export default Confirm;
