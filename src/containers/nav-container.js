import React from "react";
import NavComponenet from "../components/nav-component/nav-component";

const NavContainer = () => {
    const menu = [{
        path: "/",
        label: "Dashboard",
    }, {
        path: "/menu",
        label: "Menu",
    }, {
        path: "/rooms",
        label: "Rooms",
    }]

    return <NavComponenet menu={menu}/>
}

export default NavContainer;