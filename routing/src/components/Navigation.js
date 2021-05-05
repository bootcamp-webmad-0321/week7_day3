import './Navigation.css'

import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return (
        <nav className="navigation">
            <ul>
                <li><NavLink to="/" exact activeClassName="active-section">Inicio</NavLink></li>
                <li><NavLink to="/sobre-mi" activeClassName="active-section">Sobre mí</NavLink></li>
                <li><NavLink to="/panel-admin" activeClassName="active-section">Admin</NavLink></li>
                <li><NavLink to="/tienda/ropa/pantalon/temporada/verano" activeClassName="active-section">Route Params</NavLink></li>
                <li><NavLink to="/vuelos?from=12/02/2021&to=22/02/2021&adults=4" activeClassName="active-section">Query strings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation