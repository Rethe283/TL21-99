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
    const handleClick = (e) => {
        e.preventDefault()
        history.push("/redirecting")
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
        <button type="submit" onClick={handleClick}>Confirm payment</button>
      </div>
      )}
    </div>
  );
};

export default Confirm;
