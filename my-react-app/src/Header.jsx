function Header(params) {
    return(
        <header className="header">
            <h1 className="title">Fruit Market</h1>
            <hr />
            <ul className="nav">
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">Services</a></li>
                <li className="nav-item"><a href="#">About</a></li>
                <li className="nav-item"><a href="#">Contact</a></li>    
            </ul>
            <hr />
        </header>
    )
}

export default Header