import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import ErrorBoundary from "./components/ErrorBoundary"
import PrivateRoute from "./components/PrivateRoute"

import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Checkout from "./pages/Checkout"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />

          
          <Route element={<PrivateRoute />}>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  )
}

export default App
