import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useFetch from "../useFetch";
function useQuery() {
  const {search} = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const PassesCostResults = () => {
    let query = useQuery();
    
    const history = useHistory('')
    const handleClick1 = (e) => {
        e.preventDefault()
        history.push(`/passescost`)
    }
    const handleClick2 = (e) => {
      e.preventDefault()
      history.push(`/`)
  }
    const { error, isPending, data } = useFetch(
      `http://localhost:9130/interoperability/api/PassesCost/${query.get("operator1")}/${query.get("operator2")}/${query.get("datefrom")}/${query.get("dateto")}`
    );
    
  return (
    <div className="Analysis">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {data && 
      <div>
        <h2>Short Analysis</h2> 
        <table>
            <td>In the time period between {data.PeriodFrom} and {data.PeriodTo} {data.op1_ID} has charged {data.op2_ID} {data.PassesCost} euros for {data.NumberOfPasses} passes</td>
        </table>
        <button type="submit" onClick={handleClick1}>New PassesCost</button>
        <div/>
        <button type="submit" onClick={handleClick2}>Home</button>
      </div>
      }
    </div>
  );
};

export default PassesCostResults;
