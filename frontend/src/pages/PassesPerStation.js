import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PassesPerStation = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [Station, setStation] = useState("AO00");
  const history = useHistory()

  const handleSubmit = (e) => {
      e.preventDefault()
    console.log(dateFrom);
    const datefrom = dateFrom.replaceAll('-','');
    const dateto = dateTo.replaceAll('-','');
    history.push(`/passesperstationresults?station=${Station}&datefrom=${datefrom}&dateto=${dateto}`)
  };

  return (
    <div className="passes per station">
      <h2>Check Passes Cost</h2>
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

        <label htmlFor="">Station: </label>
        <select
          value={Station}
          required
          onChange={(e) => {
            setStation(e.target.value);
          }}
        >
          <option value="AO00">AO 00</option>
          <option value="AO01">AO 01</option>
          <option value="AO02">AO 02</option>
          <option value="AO03">AO 03</option>
          <option value="AO04">AO 04</option>
          <option value="AO05">AO 05</option>
          <option value="AO06">AO 06</option>
          <option value="AO07">AO 07</option>
          <option value="AO08">AO 08</option>
          <option value="AO09">AO 09</option>
          <option value="AO10">AO 10</option>
          <option value="AO11">AO 11</option>
          <option value="AO12">AO 12</option>
          <option value="AO13">AO 13</option>
          <option value="AO14">AO 14</option>
          <option value="AO15">AO 15</option>
          <option value="AO16">AO 16</option>
          <option value="AO17">AO 17</option>
          <option value="AO18">AO 18</option>
          <option value="AO19">AO 19</option>
          <option value="AO20">AO 20</option>
          <option value="GF00">GF 00</option>
          <option value="EG00">EG 00</option>
          <option value="EG01">EG 01</option>
          <option value="EG02">EG 02</option>
          <option value="EG03">EG 03</option>
          <option value="EG04">EG 04</option>
          <option value="EG05">EG 05</option>
          <option value="EG06">EG 06</option>
          <option value="EG07">EG 07</option>
          <option value="EG08">EG 08</option>
          <option value="EG09">EG 09</option>
          <option value="EG10">EG 10</option>
          <option value="EG11">EG 11</option>
          <option value="EG11">EG 12</option>
          <option value="KO00">KO 00</option>
          <option value="KO01">KO 01</option>
          <option value="KO02">KO 02</option>
          <option value="KO03">KO 03</option>
          <option value="KO04">KO 04</option>
          <option value="KO05">KO 05</option>
          <option value="KO06">KO 06</option>
          <option value="KO07">KO 07</option>
          <option value="KO08">KO 08</option>
          <option value="KO09">KO 09</option>
          <option value="MR00">MR 00</option>
          <option value="MR01">MR 01</option>
          <option value="MR02">MR 02</option>
          <option value="MR03">MR 03</option>
          <option value="MR04">MR 04</option>
          <option value="MR05">MR 05</option>
          <option value="MR06">MR 06</option>
          <option value="MR07">MR 07</option>
          <option value="MR08">MR 08</option>
          <option value="NE00">NE 00</option>
          <option value="NE01">NE 01</option>
          <option value="NE02">NE 02</option>
          <option value="NE03">NE 03</option>
          <option value="NE04">NE 04</option>
          <option value="NE05">NE 05</option>
          <option value="NE06">NE 06</option>
          <option value="NE07">NE 07</option>
          <option value="NE08">NE 08</option>
          <option value="NE09">NE 09</option>
          <option value="NE10">NE 10</option>
          <option value="NE11">NE 11</option>
          <option value="NE12">NE 12</option>
          <option value="NE13">NE 13</option>
          <option value="NE14">NE 14</option>
          <option value="NE15">NE 15</option>
          <option value="NE16">NE 16</option>
          <option value="OO00">OO 00</option>
          <option value="OO01">OO 01</option>
          <option value="OO02">OO 02</option>
          <option value="OO03">OO 03</option>
          <option value="OO04">OO 04</option>
          <option value="OO05">OO 05</option>
          <option value="OO06">OO 06</option>
          <option value="OO07">OO 07</option>
          <option value="OO08">OO 08</option>
          <option value="OO09">OO 09</option>
          <option value="OO10">OO 10</option>
          <option value="OO11">OO 11</option>
          <option value="OO12">OO 12</option>
          <option value="OO13">OO 13</option>
        </select>
        <br />
        <button type="submit">proceed</button>
      </form>
    </div>
  );
};

export default PassesPerStation;