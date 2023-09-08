import React from "react";
import {gql,useMutation,useQuery} from "@apollo/client";
import { useState } from "react";
import { CREATE_ITEM } from "../../gql/mutations";
import  {FORMC_QUERY,CATS_QUERY,FORMP_QUERY } from "../../gql/queries"
import "../shopstyles/forms.css"





const AddNew = () => {
  
  const [sel,setSel]=useState(1)
  const [name, setName]= useState("")
  const [price, setPrice]= useState(0)

  
  const { loading: cats_loading, error: cats_error, data:cats_data } = useQuery(FORMC_QUERY);
  const [addItem, { data, loading, error }] = useMutation(CREATE_ITEM,
    {
      onCompleted: (d)=>{
        alert("Item has been created")
      },
    refetchQueries: [
      
        { query: CATS_QUERY }, { query: FORMP_QUERY }
      
    ]
  });
  console.log("haha",error)
    return ( <div className="dropdown">
      <select name="SelectList" id="selection" value={sel} onChange={(e)=>setSel(e.target.value)}>
        <option  disabled value>Select Category:</option>
        {
          cats_data?.categories.map((cat)=> <option key= {cat.id} value={cat.id} >{cat.title}</option>)
          
       }
       {
        console.log("THis is sel",sel)
       }
      </select>
        <form className="inpfield" onSubmit={e => {
                    e.preventDefault();
                    console.log("price",price)
                    addItem({ variables: { title: name, price: price, categoryid: sel }});

                  }}>
        <label className="label">Enter name of Item:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="label">Enter price of item:
          <input
            type="integer" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button className="buttonc" id="create" type="submit">Create Item</button>
    </form>
    </div> );
}
 
export default AddNew;