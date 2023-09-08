import React from "react";
import { useQuery,gql } from "@apollo/client";
import { useEffect } from "react";



const Products = (props) => {
   
  
  const{addToCart,products} = props;

    return ( 
         <>{products?.map((pro)=>  
         {
            // console.log(pro.id)
            return <div className="item_title" onClick={()=> addToCart(pro)} key={pro.id}>{pro.title}</div>
            
         }
        )}</>
     );
}
 
export default Products;