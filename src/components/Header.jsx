import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom py-3 mb-4">
            <div className="container">
                <div className="navbar-brand">logo</div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link">Home Page</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/movies' className="nav-link">Movies</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header