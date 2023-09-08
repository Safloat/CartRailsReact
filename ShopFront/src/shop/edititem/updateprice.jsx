
import React from "react";
import {gql,useMutation,useQuery} from "@apollo/client";
import { useState } from "react";
import {  UPDATE_PRICE  } from "../../gql/mutations";
import  {FORMP_QUERY,CATS_QUERY } from "../../gql/queries"
import "../shopstyles/forms.css"

const UpdatingPrice = () => {
    const { loading: cats_loading, error: cats_error, data:items_data } = useQuery(FORMP_QUERY,
      {
        onCompleted: (d)=>{
          setSel(d?.items[0].id)
        }
      });
    const [updatePrice, { data, loading, error }] = useMutation( UPDATE_PRICE ,{
        onCompleted: (d)=> {
          alert("Price Updated")
        },
        refetchQueries: [
          
            { query: CATS_QUERY }, { query: FORMP_QUERY }
            
          
        ]
      });
    const [sel,setSel]=useState(null)
    const [price, setPrice]= useState(0)

    return ( <div className="dropdown">
        <select id="selection" name="SelectList" value={sel} onChange={(e)=>setSel(e.target.value)}>
          {/* console.log() */}
        <option  disabled value>Select Item:</option>
          {
            items_data?.items.map((item)=> <option key= {item.id} value={item.id} >{item.title}</option>)
            
         }
         {
          console.log("THis is sel",sel)
         }
        </select>
          <form onSubmit={e => {
                      e.preventDefault();
                    
                      updatePrice({ variables: { price: price, id: sel }});
  
                    }} className="updateform">
                <label className="label">Enter updated price of item:
                  <input
                    type="integer" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
              </label>
          <button className="buttonc" id="Update" type="submit">Update</button>
      </form>
      </div> );;
}
 
export default UpdatingPrice;