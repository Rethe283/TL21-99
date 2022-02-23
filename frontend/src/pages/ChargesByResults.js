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
    const handleClick1 = (e) => {
      e.preventDefault()
      history.push(`/chargesby`)
  }
  const handleClick2 = (e) => {
    e.preventDefault()
    history.push(`/`)
}
    const { error, isPending, data } = useFetch(
      `https://localhost:9130/interoperability/api/ChargesBy/${query.get("operator")}/${query.get("datefrom")}/${query.get("dateto")}`
    );
    
  return (
    <div className="Analysis">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {data && 
      <div>
        <h2>Charges By {data.op_ID}</h2> 
        <table>
            <td>Operator {data.op_ID} had {data.NumberOfPasses} passes and charged:</td>
        </table>
        <table style={{
                border:"1px solid black"
            }}>
            <th style={{
                border:"1px solid black"
            }}>Charged Operator</th>
            <th style={{
                border:"1px solid black"
            }}>Passes</th>
            <th style={{
                border:"1px solid black"
            }}>Sum</th>
            {data.PPOList.map((list)=>(
                <tr className="pass-preview" key={list.VisitingOperator}>
                <td style={{
                border:"1px solid black"
            }}>{list.VisitingOperator}</td>
                <td style={{
                border:"1px solid black"
            }}>{list.CountOfPasses}</td>
                <td style={{
                border:"1px solid black"
            }}>{list.ChargeSum}</td>
                </tr>
            ))}
            </table>
        <table>
        <button type="submit" onClick={handleClick1}>New Charges By</button>
        <button type="submit" onClick={handleClick2}>Home</button>
        </table>
      </div>
      }
    </div>
  );
};

export default ViewshortAnalysis;