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
        history.push(`/passesperstation`)
    }
    const handleClick2 = (e) => {
        e.preventDefault()
        history.push(`/`)
    }
    const { error, isPending, data } = useFetch(
      `https://localhost:9130/interoperability/api/PassesPerStation/${query.get("station")}/${query.get("datefrom")}/${query.get("dateto")}`
    );
  return (
    <div className="Analysis">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {data && 
      <div>
        <h2>Passes Per Station</h2> 
        <table>
            <td>In the time period between {data.PeriodFrom} and {data.PeriodTo} there have been {data.NumberOfPasses} passes through {data.Station} operated by {data.StationOperator}</td>
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
            }}>PassTimeStamp</th>
            <th style={{
                border:"1px solid black"
            }}>VehicleID</th>
            <th style={{
                border:"1px solid black"
            }}>TagProvider</th>
            <th style={{
                border:"1px solid black"
            }}>PassType</th>
            <th style={{
                border:"1px solid black"
            }}>PassCharge</th>
            {data.PassList.map((pass)=>(
                <tr className="pass-preview" key={pass.passID}>
                <td style={{
                border:"1px solid black"
            }}>{pass.PassIndex}</td>
                <td style={{
                border:"1px solid black"
            }}>{pass.passID}</td>
                <td style={{
                border:"1px solid black"
            }}>{pass.PassTimeStamp}</td>
                <td style={{
                border:"1px solid black"
            }}>{pass.VehicleID}</td>
            <td style={{
                border:"1px solid black"
            }}>{pass.TagProvider}</td>
                <td style={{
                border:"1px solid black"
            }}>{pass.PassType}</td>
                <td style={{
                border:"1px solid black"
            }}>{pass.PassCharge}</td>
                </tr>
            
            ))}
            </table>
        <button type="submit" onClick={handleClick1}>New PassesPerStation</button>
        <div/>
        <button type="submit" onClick={handleClick2}>Home</button>
      </div>
      }
    </div>
  );
};

export default ViewlongAnalysis;
