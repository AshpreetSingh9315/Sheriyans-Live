import React from "react";

const ShowTask = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      {/* Right side - Todo list (3/5 width) */}
      <div className="w-3/5 bg-gray-50 p-6 rounded-r-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Tasks</h2>

        <div className="space-y-4">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No tasks yet. Add a new task!
            </p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500 hover:shadow-md transition duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                      className="h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span
                      className={`ml-3 font-medium ${
                        todo.completed
                          ? "line-through text-gray-400"
                          : "text-gray-700"
                      }`}
                    >
                      {todo.text}
                    </span>
                  </div>
                </div>
                {todo.description && (
                  <p className="mt-2 ml-8 text-sm text-gray-500">
                    {todo.description}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ShowTask;
