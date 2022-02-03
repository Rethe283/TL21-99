import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useFetch from "../useFetch";
// import "./viwlonganalysis.css"
function useQuery() {
  const {search} = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const ViewlongAnalysis = () => {
    let query = useQuery();
    
    const history = useHistory('')
    const handleClick1 = (e) => {
        e.preventDefault()
        history.push(`/ViewshortAnalysis?operator1=${query.get("operator1")}&operator2=${query.get("operator2")}&datefrom=${query.get("datefrom")}&dateto=${query.get("dateto")}`)
    }
    const handleClick2 = (e) => {
        e.preventDefault()
        history.push(`/analysis`)
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
        <h2>Long Analysis</h2> 
        <table>
            <td>In the time period between {data.PeriodFrom} and {data.PeriodTo} there have been {data.NumberOfPasses} Passes with {data.op2_ID}'s tag that passed through {data.op1_ID}'s stations</td>
        </table>
            <table style={{
                border:"1px solid black"
            }}>
            <th style={{
                border:"1px solid black"
            }}>PassIndex</th>
            <th style={{
                border:"1px solid black"
            }}>passID</th>
            <th style={{
                border:"1px solid black"
            }}>StationID</th>
            <th style={{
                border:"1px solid black"
            }}>PassTimeStamp</th>
            <th style={{
                border:"1px solid black"
            }}>VehicleID</th>
            <th style={{
                border:"1px solid black"
            }}>Charge</th>
            {data.PassesList.map((pass)=>(
                <tr className="pass-preview" key={pass.passID}>
                <td style={{
                border:"1px solid black"
            }}>{pass.PassIndex}</td>
                <td style={{
                border:"1px solid black"
            }}>{pass.passID}</td>
                <td style={{
                border:"1px solid black"
            }}>{pass.StationID}</td>
                <td style={{
                border:"1px solid black"
            }}>{pass.PassTimeStamp}</td>
            <td style={{
                border:"1px solid black"
            }}>{pass.VehicleID}</td>
                <td style={{
                border:"1px solid black"
            }}>{pass.Charge}</td>
                </tr>
            ))}
            </table>
        <button type="submit" onClick={handleClick1}>View Short Aanalysis</button>
        <div/>
        <button type="submit" onClick={handleClick2}>Request new Analysis</button>
      </div>
      }
    </div>
  );
};

export default ViewlongAnalysis;
