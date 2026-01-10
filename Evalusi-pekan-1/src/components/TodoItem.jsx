export default function TodoItem({ todo, onToggle, onDelete }) {

    return (
        <div className="flex items-center gap-3 py-2 border-b border-gray-100 dark:border-gray-800 last:border-0 group">
            <input
                type="checkbox"
                className="w-4 h-4 accent-gray-800 cursor-pointer"
                checked={!!todo.completed}
                onChange={() => onToggle(todo.id)}
            />

            <span className={`flex-1 ${todo.completed ? "line-through text-gray-400 italic" : "text-gray-900"}`}>
                {todo.text}
            </span>

            <button
                onClick={() => onDelete(todo.id)}
                className="text-xs text-red-500 hover:font-bold"
            >
                Hapus
            </button>
        </div>
    )
}