import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-12 justify-center items-center'>
        <NavLink className={(e)=>e.isActive ? "text-red-300 font-medium" : ""} to={"/"}>Home</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300 font-medium" : ""} to={"/recipes"}>Recipes</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300 font-medium" : ""} to={"/about"}>About</NavLink>
        <NavLink className={` px-5 py-2 bg-gray-900 rounded ${(e)=>e.isActive ? "text-red-300 font-medium" : ""}`} to={"/create-recipes"}>Create Recipes</NavLink>
    </div>
  )
}

export default Navbar