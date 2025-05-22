import { nanoid } from 'nanoid'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRecipeContext } from '../RecipeContext/Recipecontext'

const Create = () => {

    const {data,setdata} = useRecipeContext();

    const {register , handleSubmit , reset}=useForm()

    const dataSubmit = (e)=>{
        e.id = nanoid();
        setdata([...data, e]);
        reset();
    }

  return (
   <form onSubmit={handleSubmit(dataSubmit)}>

    <div className='my-2'>
        <input className='block outline-0 border-b p-3 ' type="url" placeholder='Exter Image Url' {...register("img")}/>
    <small className='text-red-500 '>This is for errors</small>
    </div>

    <input className='block outline-0 border-b p-3 my-2' type="text" placeholder='Chef Name' {...register("chef")}/>

    <input className='block outline-0 border-b p-3 my-2' type="text" placeholder='Recipes Title' {...register("title")}/>

    <input className='block outline-0 border-b p-3 my-2' type="text" placeholder='Recipe Description' {...register("decription")}/>

    <input className='block outline-0 border-b p-3 my-2' type="text" placeholder='Write Ingredients ,' {...register("ingredients")}/>

    <input className='block outline-0 border-b p-3 my-2' type="text" placeholder='Write Instructions ,' {...register("instructions")}/>

    <select {...register("category")} className='block outline-0 border-b p-3 my-2' >
        <option value="cate1" className='bg-gray-800'>Category 1</option>
        <option value="cate2" className='bg-gray-800'>Category 2</option>
        <option value="cate3" className='bg-gray-800'>Category 3</option>
    </select>

    <button className=' block bg-gray-900 rounded-md px-4 py-2 mt-5'>Save Recipe</button>
   </form>
  )
}

export default Create