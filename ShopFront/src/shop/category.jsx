import React, { useState } from "react";
import Products from "./product";

const Category = (props) => {
    const { title, addToCart,products }= props;
    const [vis,setVis]=useState(undefined)
   
    return ( <div className="cat_title" id={"cat"+title} onMouseOver={()=>setVis(1)} onMouseOut={()=>setVis(undefined)}>
        {title}
        <div className={vis ? "disp" : "this"} id={title} key={title} style={{ visibility: vis != undefined? 'visible': 'hidden'}}><Products data={title} onMouseOver={()=>setVis(1)} onMouseOut={()=>setVis(undefined)} addToCart={addToCart} products={products} /></div>
        
    </div> );
}
 
export default Category;
