
import React from "react";
import {gql,useMutation,useQuery} from "@apollo/client";
import { useState } from "react";
import { REMOVE_ITEM } from "../../gql/mutations";
import  {FORMP_QUERY,CATS_QUERY } from "../../gql/queries"
import "../shopstyles/forms.css"

const RemoveItem = () => {
    const { loading: cats_loading, error: cats_error, data:items_data } = useQuery(FORMP_QUERY);
    const [deleteItem, { data, loading, error }] = useMutation(REMOVE_ITEM,{
      onCompleted: (d)=> {
        alert("Item removed")
      },
        refetchQueries: [
          
            { query: CATS_QUERY }, { query: FORMP_QUERY }
            
          
        ]
      });
    const [sel,setSel]=useState(1)
    return ( <div className="dropdown">
        <select id="selection" name="SelectList" value={sel} onChange={(e)=>setSel(e.target.value)}>
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
                    
                      deleteItem({ variables: { id: sel }});
  
                    }}>
          <button className="buttonc" id="delete" type="submit">Delete</button>
      </form>
      </div> );;
}
 
export default RemoveItem;