import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>IntraPass</h1>
            <div className="links">
            <Link to="/" style={{
                    color: 'white',
                    background:'red',
                    borderRadius: "8px"
                }}>Home</Link>
                <Link to="/payment">Payment</Link>
                <Link to="/analysis">Analysis</Link>
                <Link to="/chargesby">ChargesBy</Link>
                <Link to="/passescost">PassesCost</Link>
                <Link to="/passesperstation">PassesPerStation</Link>
                <Link to="/vehiclepasses">TrackVehicle</Link>
            </div>
        </nav>
    )
}

export default Navbar;
