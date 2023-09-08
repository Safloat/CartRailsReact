import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./shop/shop";
import AddNew from "./shop/newitems/addnew";
import { Navbar } from "./navbar/navbar";
import RemoveItem from "./shop/removeitems/removeitem";
import UpdatingPrice from "./shop/edititem/updateprice";

const App = () => {
  return ( 
    <>
  
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/new" element={<AddNew/>} />
      <Route path="/remove" element={<RemoveItem />} />
      <Route path="/update" element={<UpdatingPrice />} />
    </Routes>
  </Router>
  </>
   );
}
 
export default App;
