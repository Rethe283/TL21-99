import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useFetch from "../useFetch";
function useQuery() {
  const {search} = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const VehiclePassesResults = () => {
    let query = useQuery();
    
    const history = useHistory('')
    const handleClick1 = (e) => {
        e.preventDefault()
        history.push(`/vehiclepasses`)
    }
    const handleClick2 = (e) => {
        e.preventDefault()
        history.push(`/`)
    }
    const { error, isPending, data } = useFetch(
      `https://localhost:9130/interoperability/api/vehicle_passes/${query.get("vehicle")}/${query.get("datefrom")}/${query.get("dateto")}`
    );
  return (
    <div className="Analysis">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {data && 
      <div>
        <h2>Long Analysis</h2> 
        <table>
            <td>In the time period between {data.PeriodFrom} and {data.PeriodTo} vehicle with {data.vehicleID} had {data.NumberOfPasses} passes, was charged {data.TotalAmountCharged} and visited:</td>
        </table>
            <table style={{
                border:"1px solid black"
            }}>
            <th style={{
                border:"1px solid black"
            }}>Operator</th>
            <th style={{
                border:"1px solid black"
            }}>PassesCount</th>
            <th style={{
                border:"1px solid black"
            }}>Total Amount Charged</th>
            {data.VisitsPerStation.map((pass)=>(
                <tr className="pass-preview" key={pass.StationOperator}>
                <td style={{
                border:"1px solid black"
            }}>{pass.StationOperator}</td>
                <td style={{
                border:"1px solid black"
            }}>{pass.PassesCount}</td>
                <td style={{
                border:"1px solid black"
            }}>{pass.ChargePerStation}</td>
                </tr>
            ))}
            </table>
        <button type="submit" onClick={handleClick1}>Track New Vehicle</button>
        <div/>
        <button type="submit" onClick={handleClick2}>Home</button>
      </div>
      }
    </div>
  );
};

export default VehiclePassesResults;
