import React from "react";

const Cart =({cartItems}) => {

    return(
        <div>
            <h3> Shopping Cart</h3>
            <ul>
            {cartItems.map(item => (
                <li key={item.id}>
                    {item.name} - Quantity: {item.quantity}
                </li>
            ))}
        </ul>
        </div>
    )
}

export default Cart;