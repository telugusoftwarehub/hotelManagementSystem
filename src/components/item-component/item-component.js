import React from "react";
import "./item-component.css";

const ItemComponent = ({ menuItems }) => {
    return <ul className="menuItems">
        {menuItems && menuItems.map((item) => {
            return <li>
                <div>
                    <img src={item.img} />
                </div>
                <p><strong>ITEM NAME:</strong> {item.name}</p>
                <p><strong>PRICE:</strong>{item.price}</p>
                <p><strong>TYPE:</strong>{item.type}</p>

            </li>

        })}
    </ul>
}

export default ItemComponent;