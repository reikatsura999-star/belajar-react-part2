import React, { useState, useCallback } from "react";

// Komponen Child tanpa memo
function ChildWithoutMemo({ onClick }) {
  console.log("❌ ChildWithoutMemo render");
  return (
    <button onClick={onClick} style={{ padding: "8px 12px", margin: "5px" }}>
      Child tanpa memo
    </button>
  );
}

// Komponen Child dengan memo
const ChildWithMemo = React.memo(function ChildWithMemo({ onClick }) {
  console.log("✓ ChildWithMemo render");
  return (
    <button onClick={onClick} style={{ padding: "8px 12px", margin: "5px" }}>
      Child dengan memo
    </button>
  );
});

export default function OptimizeCallback() {
  const [count, setCount] = useState(0);

  // Tanpa useCallback - function baru di setiap render
  const handleClickNoCallback = () => {
    console.log("Clicked tanpa useCallback");
  };

  
  const handleClickWithCallback = useCallback(() => {
    console.log("Clicked dengan useCallback");
  }, []);

  return (
    <div style={{ padding: "15px", border: "2px solid orange", margin: "10px" }}>
      <h3>OptimizeCallback: useCallback vs tanpa</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)} style={{ marginBottom: "10px" }}>
        Tambah Count ({count})
      </button>

      <div>
        <h4>Tanpa useCallback:</h4>
        <ChildWithoutMemo onClick={handleClickNoCallback} />
        <p style={{ fontSize: "12px", color: "red" }}>
          ⚠️ Function baru di setiap render → Child rerender
        </p>
      </div>

      <div>
        <h4>Dengan useCallback + Memo:</h4>
        <ChildWithMemo onClick={handleClickWithCallback} />
        <p style={{ fontSize: "12px", color: "green" }}>
          ✓ Function stable → Child tidak rerender
        </p>
      </div>
    </div>
  );
}
