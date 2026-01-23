import React, { useState, Suspense } from "react";

// Lazy load halaman
const PageOne = React.lazy(() =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ default: () => <div>📄 Ini Halaman 1 - Dimuat dengan Lazy Loading</div> });
    }, 500);
  })
);

const PageTwo = React.lazy(() =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ default: () => <div>📄 Ini Halaman 2 - Dimuat dengan Lazy Loading</div> });
    }, 500);
  })
);

const PageThree = React.lazy(() =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ default: () => <div>📄 Ini Halaman 3 - Dimuat dengan Lazy Loading</div> });
    }, 500);
  })
);

export default function LazyNavApp() {
  const [page, setPage] = useState(null);

  return (
    <div style={{ padding: "15px", border: "2px solid purple", margin: "10px" }}>
      <h3>LazyNavApp: Lazy Loading</h3>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setPage("one")} style={{ marginRight: "5px" }}>
          Halaman 1
        </button>
        <button onClick={() => setPage("two")} style={{ marginRight: "5px" }}>
          Halaman 2
        </button>
        <button onClick={() => setPage("three")} style={{ marginRight: "5px" }}>
          Halaman 3
        </button>
      </div>

      <Suspense fallback={<div>⏳ Memuat halaman...</div>}>
        {page === "one" && <PageOne />}
        {page === "two" && <PageTwo />}
        {page === "three" && <PageThree />}
        {!page && <p style={{ color: "gray" }}>Pilih salah satu halaman</p>}
      </Suspense>
      
      <p style={{ fontSize: "12px", color: "purple" }}>
        ✓ Halaman hanya dimuat saat dibutuhkan (code splitting)
      </p>
    </div>
  );
}
