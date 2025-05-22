/* eslint-disable react-refresh/only-export-components */
import { createContext , useContext , useState } from "react"
import React from 'react'

export const recipecontext = createContext(null);

export let useRecipeContext = ()=>{
    return useContext(recipecontext)
}

const Recipecontext = (props) => {
    const [data, setdata] = useState([])
    console.log(data)
  return (
    <recipecontext.Provider value={{data,setdata}}>
        {props.children}
    </recipecontext.Provider>
  )
}

export default Recipecontext