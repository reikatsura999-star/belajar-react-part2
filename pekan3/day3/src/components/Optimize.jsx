import React, { useState } from "react";

function TextNoMemo() {
  console.log("❌ TextNoMemo render");
  return <p>Teks tanpa memo</p>;
}

const TextWithMemo = React.memo(function TextWithMemo() {
  console.log("✓ TextWithMemo render");
  return <p>Teks dengan memo</p>;
});

export default function Optimize() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "15px", border: "2px solid green", margin: "10px" }}>
      <h3>Optimize: React.memo</h3>
      <button onClick={() => setCount(c => c + 1)} style={{ marginBottom: "10px" }}>
        Klik ({count})
      </button>

      <div>
        <h4>Dengan React.memo:</h4>
        <TextWithMemo />
        <p style={{ fontSize: "12px", color: "green" }}>
          ✓ Hanya render pertama kali, tidak rerender saat parent update
        </p>
      </div>

      <div>
        <h4>Tanpa React.memo:</h4>
        <TextNoMemo />
        <p style={{ fontSize: "12px", color: "red" }}>
          ❌ Rerender setiap kali parent render
        </p>
      </div>
    </div>
  );
}
