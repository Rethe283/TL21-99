const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>IntraPass</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/calculate">Calculate</a>
                <a href="/graphs" style={{
                    color: 'white',
                    background:'red',
                    borderRadius: "8px"
                }}>Graphs</a>
            </div>
        </nav>
    )
}

export default Navbar