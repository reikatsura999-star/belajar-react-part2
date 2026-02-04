import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { ProductDetail } from "./pages/ProductDetail"
import { Cart } from "./pages/Cart"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/protextguard"

import { Navbar } from "./components/Navbar"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />

        {/* Protected routes */}
        <Route path="/products/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
