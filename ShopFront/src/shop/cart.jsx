import React from "react";
import InsideCart from "./incart";
import { gql,useQuery } from "@apollo/client";


const CartVariable = (props) => {

   
    const { EmptyCart, cartItems,addToCart,removeFromCart,removeEntirely} = props;
    const calcTotal = ()=>
    {
        var total=0;
        console.log("Cartitems size:",cartItems)
        console.log( typeof cartItems)
        
        for (const key in cartItems) {
            total+=(cartItems[key].price* cartItems[key].quantity)
            console.log("keys",key)
            
        };
        console.log("This is the total",total)
        return total
        
   
    }
    return ( <div id="cart_style">
        <div className="cart_internal">
            <h3>Item</h3>
            <h3>Quantity</h3>
            <h3>Price</h3>
        </div>
        
        <div>{Object.keys(cartItems).map((key)=> <InsideCart  key={key+"cart"} data={key} cart={cartItems} addToCart={addToCart} removeFromCart ={removeFromCart } removeEntirely={removeEntirely}/>)}</div>
        <div className="cart_internal" id="Total_Div">
            <h3 >Total {calcTotal()}</h3>
            <button id="del_button" onClick={()=>EmptyCart()}>Empty Cart</button>
        </div>
    </div> );
}
 
export default CartVariable;