import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [value, setValue] = useState("");

  const submit = () => {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Tambah tugas..."
        className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 bg-white text-gray-900"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit();
        }}
      />
      <button
        onClick={submit}
        className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-black font-medium"
      >
        Tambah
      </button>
    </div>
  );
}
