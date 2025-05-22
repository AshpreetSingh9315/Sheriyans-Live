import React, { useState } from "react";
import AddTask from "./Components/AddTask";
import ShowTask from "./Components/ShowTask";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex w-full h-screen bg-gray-100 p-4">
      <AddTask todos={todos} setTodos={setTodos} />
      <ShowTask todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
