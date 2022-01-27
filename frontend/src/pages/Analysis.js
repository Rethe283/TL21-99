import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Analysis = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [payingOperator, setPayingOperator] = useState("");
  const [receivingOperator, setReceivingOperator] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
      console.log('something');
  }
  
  return (
    <div className="analysis">
      <h2>Passes report</h2>
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

        <label>owes</label>
        <select
          value={payingOperator}
          required
          onChange={(e) => {
            setPayingOperator(e.target.value);
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

        <label>to</label>
        <select
          value={receivingOperator}
          required
          onChange={(e) => {
            setReceivingOperator(e.target.value);
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

export default Analysis;
