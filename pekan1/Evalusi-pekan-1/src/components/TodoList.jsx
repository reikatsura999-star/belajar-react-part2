import { useState } from "react";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {

    const [todos, setTodos] = useState([])
    const [filter, setfilter] = useState('all')

    const addTodo = (text) => {
        if (!text.trim()) return

        setTodos([
            ...todos,
            // SALAH: 'complated' typo, seharusnya 'completed'
            { id: Date.now(), text, completed: false }
        ])

    }

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
        setTodos(todos.filter((todo) => todo.id !== id))
    }


    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true
    })

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
            <h1 className="text-xl font-bold mb-6 text-gray-900">Todo List</h1>

            <div className="flex flex-col gap-6">
                <TodoForm onAdd={addTodo} />

                <TodoFilter
                    activeFilter={filter}
                    onChange={setfilter}
                />

                <div className="flex flex-col border-t border-gray-200 mt-2">
                    {filteredTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default TodoList;