
import React from "react";

const InsideCart = (props) => {
    const {removeFromCart,addToCart,removeEntirely,cart,data} = props;

    return (
    <div className="cart_internal bordering" key={data+ "cart"}>
        <h3>{cart[data].title}</h3>
        <div>
        <h3>{cart[data].quantity}</h3>
        <button className="plus" onClick={()=>addToCart(cart[data])}>+</button>
        <button className="minus" onClick={()=>removeFromCart(cart[data])}>-</button>
        <button className="del" onClick={()=>removeEntirely(cart[data])}>Remove</button>
        </div>
        <h3>{cart[data].price * cart[data].quantity}</h3>
    </div>  );
}
 
export default InsideCart;

