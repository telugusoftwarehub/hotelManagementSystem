import React from "react";
import { Link } from "react-router-dom";
import './nav-component.css'

const NavComponenet = ({menu}) => {
    return <ul className="links">
        {
            menu && menu.map((item, key) => <li><Link to={item.path}>{item.label}</Link></li>)
        }
    </ul>
}


export default NavComponenet;