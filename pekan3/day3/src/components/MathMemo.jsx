import { useState, useMemo } from "react";

export default function MathMemo() {
  const [angka, setAngka] = useState(1);
  const [klik, setKlik] = useState(0);

  const hasil = useMemo(() => {
    console.log("📊 Menghitung angka * 2 (expensive operation)");
    // Simulasi operasi berat
    let temp = angka;
    for (let i = 0; i < 100000000; i++) {
      temp = temp * 1.0000001;
    }
    return angka * 2;
  }, [angka]);

  return (
    <div style={{ padding: "15px", border: "2px solid blue", margin: "10px" }}>
      <h3>MathMemo: useMemo untuk operasi berat</h3>
      <p>Angka: {angka}</p>
      <p>{angka} × 2 = {hasil}</p>

      <button onClick={() => setAngka(a => a + 1)} style={{ marginRight: "10px" }}>
        Ubah angka
      </button>

      <button onClick={() => setKlik(k => k + 1)}>
        Klik doang ({klik})
      </button>
      <p style={{ fontSize: "12px", color: "blue" }}>
        ✓ Kalkulasi hanya dijalankan saat angka berubah, bukan saat klik doang
      </p>
    </div>
  );
}
