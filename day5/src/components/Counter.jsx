import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex justify-center p-4">
      <div className="text-center space-y-3">
        <h1 className="text-xl font-semibold">Count: {count}</h1>

        <div className="flex gap-2 justify-center">
          <button style={buttonStyle} onClick={increment}>
            Tambah
          </button>
          <button style={buttonStyle} onClick={decrement}>
            Kurang
          </button>
        </div>
      </div>
    </div>
  );
}
