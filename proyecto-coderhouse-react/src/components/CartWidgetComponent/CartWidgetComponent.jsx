import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context";
import { useContext } from "react";

const CartWidgetComponent = () => {
    const { itemCount } = React.useContext(CartContext);

    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            <span>{itemCount}</span>
        </div>
    )
}

export default CartWidgetComponent;