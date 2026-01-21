import { useCounter } from "../hooks/useCounter";
import { useToggle } from "../hooks/useToggle";
import { useForm } from "../hooks/useForm";
import { useState } from "react";

function Example() {
  const [showToggle, setShowToggle] = useState(true);

  const { count, increment, decrement } = useCounter(0);
  const [isOn, toggle] = useToggle();
  const { values, handleChange, handleSubmit, resetForm } = useForm({
    nama: "",
    email: "",
  });

  const onSubmit = (formData) => {
    console.log("Form Data:", formData);
    alert(`Nama: ${formData.nama}\nEmail: ${formData.email}`);
  };

  return (
    <>
      <button onClick={() => setShowToggle(!showToggle)}>
        Ganti Component
      </button>

      {showToggle ? (
        <>
          <p>{isOn ? "ON" : "OFF"}</p>
          <button onClick={toggle}>Toggle</button>
        </>
      ) : (
        <>
          <p>{count}</p>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </>
      )}

      <hr />

      <div style={{ marginTop: "20px" }}>
        <h2>Form Input - Real Time Display</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
        
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="nama">Nama: </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={values.nama}
              onChange={handleChange}
              placeholder="Masukkan nama"

            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Masukkan email"

            />
          </div>

          <button type="submit">
            Submit
          </button>
          <button onClick={resetForm}>
            Reset
          </button>
        </form>

        <div>
          <h3>Data Real-Time:</h3>
          <p>
            <strong>Nama:</strong> {values.nama || "(belum diisi)"}
          </p>
          <p>
            <strong>Email:</strong> {values.email || "(belum diisi)"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Example;
