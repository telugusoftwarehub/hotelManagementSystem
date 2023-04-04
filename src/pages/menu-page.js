import React, { useEffect, useState } from 'react';
import ItemContainer from '../containers/item-container';

const MenuPage = () => {
    //initiated an empty array state
    const [menuItems, setMenuItems] = useState([]);

    useEffect(()=> {
        fetch("./responses/menu.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json()).then((response) => {
            setMenuItems(response)
        })
    }, [])

    return <ItemContainer menuItems={menuItems} />
}

export default MenuPage;