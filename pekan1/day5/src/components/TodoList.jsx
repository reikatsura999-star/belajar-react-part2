import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([
      ...todos,
      { id: Date.now(), text: input, completed: false },
    ]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Todo List</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tambah tugas..."
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Tambah
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer flex-1 ${
                todo.completed
                  ? "line-through text-gray-400"
                  : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="ml-3 text-red-500"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
