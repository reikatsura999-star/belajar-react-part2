import Dashboard from "./components/DashBoard"
import LoginForm from "./components/LoginForm"
import ProductPage from "./shop/ProductPage" // Import dari folder baru
import { PrivateRoutes } from "./components/PrivateRoutes"
import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        {/* Halaman Utama adalah Login */}
        <Route path="/" element={<LoginForm />} />

        {/* Grup Rute Terproteksi (Hanya Dashboard dan Produk) */}
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/shop" element={<ProductPage />} /> {/* Route baru /shop */}
          <Route path="/products" element={<ProductPage />} />
        </Route>

        {/* 404 diletakkan di luar agar bisa diakses semua orang */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;