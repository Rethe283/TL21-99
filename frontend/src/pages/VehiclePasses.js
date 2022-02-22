import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const VehiclePasses = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [Vehicle, setVehicle] = useState("");
  const history = useHistory()

  const handleSubmit = (e) => {
      e.preventDefault()
    console.log(dateFrom);
    const datefrom = dateFrom.replaceAll('-','');
    const dateto = dateTo.replaceAll('-','');
    history.push(`/vehiclepassesresults?vehicle=${Vehicle}&datefrom=${datefrom}&dateto=${dateto}`)
  };

  return (
    <div className="tracked vehicle">
      <h2>Track A Vehicle</h2>
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

        <label htmlFor="">Vehicle License Plate: </label>
        <input
          value={Vehicle}
          required
          onChange={(e) => {
            setVehicle(e.target.value);
          }}
        >
        </input>
        <br />
        <button type="submit">proceed</button>
      </form>
    </div>
  );
};

export default VehiclePasses;