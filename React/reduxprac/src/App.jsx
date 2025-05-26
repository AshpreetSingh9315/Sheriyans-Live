import React from "react";
import Users from "./Components/Users";
import Home from "./Components/Home";
import Products from "./Components/Products";
import {Routes , Route ,NavLink } from "react-router-dom";

const App = () => {
 
  return (
    <>
      <nav className="w-full px-10 py-5 flex flex-row gap-6 justify-center items-center">
        <NavLink className={(e)=>{e.isActive ? "text-red-500" : ""}} to={"/"}>Home</NavLink>
        <NavLink className={(e)=>{e.isActive ? "text-red-400" : ""}} to={"/users"}>Users</NavLink>
        <NavLink className={(e)=>{e.isActive ? "text-red-400" : ""}} to={"/products"}>Products</NavLink>
      </nav>

      <hr />


     <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/users' element={<Users />}/>
         <Route path='/products' element={<Products />}/>
     </Routes>
    </>
  );
};

export default App;
