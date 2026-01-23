import { Suspense, useState } from "react";
import LazyNavApp from "./components/LazyNavApp";
import MathMemo from "./components/MathMemo";
import Optimize from "./components/Optimize";
import OptimizeCallback from "./components/OptimizeCallback";

export default function App() {
  const [showAll, setShowAll] = useState(true);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🚀 React Performance Testing & Profiling</h1>
      <p>
        Aplikasi ini mendemonstrasikan berbagai teknik optimasi performa React.
        Gunakan React DevTools Profiler untuk menganalisis render performance.
      </p>

      <button
        onClick={() => setShowAll(!showAll)}
        style={{
          padding: "10px 15px",
          marginBottom: "20px",
          backgroundColor: showAll ? "#4CAF50" : "#f44336",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "14px"
        }}
      >
        {showAll ? "Sembunyikan" : "Tampilkan"} Semua Komponen
      </button>

      {showAll && (
        <div>
          <Optimize />
          <MathMemo />
          <OptimizeCallback />
          <LazyNavApp />
        </div>
      )}

      <div style={{ marginTop: "30px", padding: "15px", backgroundColor: "#f0f0f0", borderRadius: "4px" }}>
        <h3>📋 Instruksi Profiling:</h3>
        <ol>
          <li>Buka React DevTools (Ctrl+Shift+J → pilih React tab)</li>
          <li>Klik "Profiler" tab di React DevTools</li>
          <li>Klik tombol record (lingkaran merah)</li>
          <li>Lakukan aksi pada komponen (klik tombol, dll)</li>
          <li>Klik stop recording</li>
          <li>Analisis hasil - lihat chart render dan komponennya</li>
        </ol>
      </div>
    </div>
  );
}
