import React from "react";
import { useState,useEffect } from "react";
import Category from "./category";
import './shopstyles/shop_style.css'
import CartVariable from "./cart";
import { useQuery,gql } from "@apollo/client";
import { CATS_QUERY} from "../gql/queries";
// import { groupBy, indexOf, map, tail, times, uniq } from 'lodash';









const Shop = () => {



    const { loading: cats_loading, error: cats_error, data:cats_data } = useQuery(CATS_QUERY,
        {
            onCompleted: (d) =>{
                console.log("COmpleted")
            }
        });
    
    
    const getDefaultCart = () => {
        let cart={}
        return cart
    }

    const [cartItems, setCartItems]= useState(getDefaultCart())
    const addToCart = (itmm) => {

      if(cartItems[itmm.id])
      {
        console.log("WHy are you here?")
        var quant_up= cartItems[itmm.id]?.quantity;
        console.log(parseInt(quant_up))
        setCartItems((prev) => ({...prev, [itmm.id]: {
            price:itmm.price,
            quantity:1+quant_up,
            title: itmm.title,
            id:itmm.id
          } }))
        console.log("new",cartItems)
      }
      else
      {
        var quant_up=0;
        setCartItems((prev) => ({...prev, [itmm.id]: {
            price:itmm.price,
            quantity:1+quant_up,
            title: itmm.title,
            id:itmm.id
          } }))
        console.log("new",cartItems)
      }
     
    
        
    }
    const removeFromCart = (itmm) => {

        if (cartItems[itmm?.id].quantity==1)
        {
            console.log("deleting",itmm.id)
            setCartItems(prev => 
            {
              const copy= {...prev};
              delete copy[itmm.id];
              return copy;
            }
              
            )

            console.log("cartItems post rmv:",cartItems)
        }
        else if(cartItems[itmm?.id])
        {
            console.log(cartItems[itmm.id])
            let quant_up= cartItems[itmm.id]?.quantity;
            console.log(parseInt(quant_up))
            setCartItems((prev) => ({...prev, [itmm.id]: {
                price:itmm.price,
                quantity:quant_up-1,
                title: itmm.title,
                id:itmm.id
            } }))
            console.log("new",cartItems)
        }
        
    }

    const removeEntirely = (itmm) => {

        console.log("deleting",itmm.id)
        setCartItems(prev => 
          {
            const copy= {...prev};
            delete copy[itmm.id];
            return copy;
          }
            
          )
    }

   

    const EmptyCart = () => {
        setCartItems((curr)=>getDefaultCart())
    }
    return ( 
        <div id="shop">
            <div className="catss">
                {
                    cats_data?.categories.map((cat)=> <Category key={cat.id} title={cat.title} products={cat.items} addToCart={addToCart}/>)
              
                }
            </div>

              
           
            <CartVariable addToCart={addToCart} removeFromCart ={removeFromCart } removeEntirely={removeEntirely} EmptyCart ={EmptyCart} cartItems= {cartItems}/>
        </div>
     );
}
 
export default Shop;
