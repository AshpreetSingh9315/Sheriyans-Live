import React from "react";
import {useForm} from "react-hook-form";

const AddTask = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const {handleSubmit,register,formState: { errors },reset} = useForm();

  // const [input, setInput] = useState("");

  const handleAddTodo = (data) => {
 
    if (data.title.trim()) {

      const newTodo = {
        id: Date(),
        text: data.title,
        description: data.description,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      reset();
    }
  };

  console.log(errors)


  
  return (
    <>
      {/* Left side - Input form (2/5 width) */}
      <div className="w-2/5 bg-white p-6 rounded-l-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Task</h2>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Task Title
          </label>
          <input
            type="text"
            {...register("title")}
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter task title"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            {...register("description")}
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Add description (optional)"
          />
        </div>

        <button
          onClick={handleSubmit(handleAddTodo)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default AddTask;
