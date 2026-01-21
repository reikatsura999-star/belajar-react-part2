import { useForm } from "../hooks/useForm";
import { useLocalStorage } from "../hooks/useLocalStorage";

function FormLocalStorage() {
  const { values, handleChange } = useForm({ nama: "", email: "" });
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [savedName, setSavedName] = useLocalStorage("userName", "");

  const handleSave = () => {
    setSavedName(values.nama);
    alert(`Nama "${values.nama}" tersimpan!`);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <button onClick={toggleTheme}>
        Tema: {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      <h2>Form Input</h2>
      <input
        type="text"
        name="nama"
        placeholder="Nama"
        value={values.nama}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Simpan</button>

      <h3>Data Real-Time:</h3>
      <p>Nama: {values.nama}</p>
      <p>Email: {values.email}</p>

      <hr />

      <h3>Data Tersimpan (dari localStorage):</h3>
      <p>
        <strong>Nama User:</strong> {savedName || "(belum disimpan)"}
      </p>
      <p>
        <strong>Tema Aktif:</strong> {theme}
      </p>
      <p>💾 Data akan tetap tersimpan setelah refresh halaman</p>
    </div>
  );
}

export default FormLocalStorage;
