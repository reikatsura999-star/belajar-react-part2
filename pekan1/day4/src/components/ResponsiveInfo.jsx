import React, { useState, useEffect } from "react";

/* ===== Custom Hook (satu file, tidak diexport) ===== */
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

/* ===== Komponen utama ===== */
export default function ResponsiveInfo() {
  const width = useWindowWidth();
  const isMobile = width < 768;

  return (
    <div>
      <h1>Ukuran Layar Anda: {width}px</h1>

      {isMobile ? (
        <p>Anda sedang melihat di perangkat mobile.</p>
      ) : (
        <p>Anda sedang melihat di perangkat desktop/tablet.</p>
      )}

      <div
        style={{
          backgroundColor: isMobile ? "orange" : "purple",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        Konten ini berubah berdasarkan lebar layar.
      </div>
    </div>
  );
}