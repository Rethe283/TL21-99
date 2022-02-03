import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useFetch from "../useFetch";
function useQuery() {
  const {search} = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const ViewshortAnalysis = () => {
    let query = useQuery();
    
    const history = useHistory('')
    const handleClick = (e) => {
        e.preventDefault()
        history.push(`/viewlonganalysis?${query.get("operator1")}/${query.get("operator2")}/${query.get("datefrom")}/${query.get("dateto")}`)
    }
    const { error, isPending, data } = useFetch(
      `http://localhost:9130/interoperability/api/PassesAnalysis/${query.get("operator1")}/${query.get("operator2")}/${query.get("datefrom")}/${query.get("dateto")}`
    );
    
  return (
    <div className="Analysis">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {data && 
      <div>
        <h2>Short Analysis</h2> 
        <table>
            <td>In the time period between {data.PeriodFrom} and {data.PeriodTo} there have been {data.NumberOfPasses} Passes with {data.op2_ID}'s tag that passed through {data.op1_ID}'s stations</td>
        </table>
        <button type="submit" onClick={handleClick}>View Long Analysis</button>
      </div>
      }
    </div>
  );
};

export default ViewshortAnalysis;
