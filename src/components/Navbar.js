import { NavLink } from "react-router-dom";


const Navbar = ()=>{
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 mb-3">
        <NavLink className="navbar-brand" to= '/' style={{textDecoration: 'none'}}>News Feed</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
                <NavLink className="nav-link" to= '/' style={{textDecoration: 'none'}}>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to= '/favourite' style={{textDecoration: 'none'}}>Favourites</NavLink>
            </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;
