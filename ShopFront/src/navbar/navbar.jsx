import React from "react";
import { useState } from "react";
import './navbar.css'
import { Link } from "react-router-dom";
export const Navbar = () => {
    const [shopstat,setClass]= useState([0,0,0])
    const SetButton = (ind) => {
        let newin=[0,0,0,0];
        newin[ind]=1;
        setClass(newin);
    }
    let add="[  +  ]"
    let sub="[  -  ]"
    let up="[  ^  ]"
    return (
    <div className="navbar">
        <Link to="/">
        <button className={shopstat[0] ? "color" : "aDD"} onClick={()=>SetButton(0)}  ><h2>Main Shop</h2></button>
        </Link>
        <Link to="/new">
            <button className={shopstat[1] ? "colornew" : "aDD"}  onClick={()=>SetButton(1)}><h2>{add}</h2>  </button>
        </Link>
        <Link to="/remove">
            <button className={shopstat[2] ? "colorrem" : "aDD"}  onClick={()=>SetButton(2)}><h2>{sub}</h2>  </button>
        </Link> 
        <Link to="/update">
            <button className={shopstat[3] ? "colorup" : "aDD"}  onClick={()=>SetButton(3)}><h2>{up}</h2>  </button>
        </Link>     
    </div>
    )
}