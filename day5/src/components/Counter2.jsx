import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const incrementTwice = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div className="max-w-xs mx-auto mt-10 p-4 border rounded text-center">
      <h2 className="text-lg font-bold mb-2">Counter</h2>

      <p className="text-3xl mb-4">{count}</p>

      <div className="flex justify-center gap-2">
        <button
          onClick={increment}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          +1
        </button>

        <button
          onClick={incrementTwice}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          +2
        </button>
      </div>
    </div>
  );
}

export default Counter;
