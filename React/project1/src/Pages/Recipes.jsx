import { useRecipeContext } from '../RecipeContext/Recipecontext'

const Recipes = () => {
  const { data } = useRecipeContext()

  return (
    <div className="flex flex-wrap gap-4 my-6">
      {data.map((recipe) => (
        <div key={recipe.id} className="card p-2 rounded-lg bg-gray-900 w-56">
          <div className="img rounded-lg bg-gray-500 w-full h-40">
            <img
              src={recipe.img}
              className="object-cover h-full w-full rounded-lg"
              alt={recipe.title}
            />
          </div>
          <div className="card-data py-2 flex gap-2 flex-col">
            <h2 className="text-2xl">{recipe.title}</h2>
            <p className="text-xs">{recipe.decription}</p>
            <button className="inline px-6 py-1 font-medium text-sm active:scale-95 transition-all bg-white text-black rounded-lg">
              See Details
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Recipes
