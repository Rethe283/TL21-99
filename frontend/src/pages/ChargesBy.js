import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ChargesBy = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [Operator, setOperator] = useState("AO");
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
  // fetch data, redirect
  console.log(dateFrom);
  const datefrom = dateFrom.replaceAll('-','');
  const dateto = dateTo.replaceAll('-','');
  history.push(`/chargesbyresults?operator=${Operator}&datefrom=${datefrom}&dateto=${dateto}`)
};

return (
  <div className="charges by">
    <h2>View Charges By Operator</h2>
    <form onSubmit={handleSubmit}>
      <h3>Dates</h3>
      <label>from</label>
      <input
        type="date"
        required
        value={dateFrom}
        onChange={(e) => setDateFrom(e.target.value)}
      />
      <label>to</label>
      <input
        type="date"
        required
        value={dateTo}
        onChange={(e) => setDateTo(e.target.value)}
      />
      <br />

      <h3>Organisation</h3>

      <label htmlFor="">Operator: </label>
      <select
        value={Operator}
        required
        onChange={(e) => {
          setOperator(e.target.value);
        }}
      >
        <option value="AO">aodos</option>
        <option value="GF">gefyra</option>
        <option value="EG">egnatia</option>
        <option value="KO">kentriki odos</option>
        <option value="MR">moreas</option>
        <option value="NE">nea odos</option>
        <option value="OO">olympia odos</option>
      </select>
      <br />
      <button type="submit">proceed</button>
    </form>
  </div>
);
};

export default ChargesBy;