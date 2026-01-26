import Dashboard from "./components/DashBoard"
import LoginForm from "./components/LoginForm"
import ProductPage from "./components/ProductPage"
import { PrivateRoutes } from "./components/PrivateRoutes"
import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import "./App.css"

function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<LoginForm />} />
        {/*private routes sebagai security bagi user yg udah login */}
        <Route element={<PrivateRoutes />}>
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/products" element={<ProductPage />} />
        </Route>
        {/* route untuk halaman tidak ditemukan */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;