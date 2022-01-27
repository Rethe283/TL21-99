import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>IntraPass</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/analysis">Analysis</Link>
                <Link to="/payment" style={{
                    color: 'white',
                    background:'red',
                    borderRadius: "8px"
                }}>Payment</Link>
            </div>
        </nav>
    )
}

export default Navbar
