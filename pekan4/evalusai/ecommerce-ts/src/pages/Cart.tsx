import { useSelector } from "react-redux"
import { useAppDispatch } from "../hooks/useRedux";
import { Link, Navigate } from "react-router-dom"
import { useMemo, useCallback } from "react"


import type { RootState } from "../store/store"
import { removeFromCart, clearCart, updateQuantity } from "../store/cartSlice"
import { useUser } from "../context/UserContext"
import { Button } from "../components/ui/button"

export function Cart() {
  const { user } = useUser()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useAppDispatch()

  if (!user) return <Navigate to="/login" />

  const total = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
  }, [cartItems])

  const handleRemoveItem = useCallback((id: number) => {
    dispatch(removeFromCart(id))
  }, [dispatch])

  const handleUpdateQuantity = useCallback((id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }))
  }, [dispatch])

  const handleClearCart = useCallback(() => {
    dispatch(clearCart())
  }, [dispatch])

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 bg-white dark:bg-transparent">
        <span className="text-6xl mb-6">🛍️</span>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Keranjang Anda Kosong
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Sepertinya Anda belum menambahkan produk apapun.
        </p>
        <Link to="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 cursor-pointer">
            Mulai Belanja
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        🛒 Keranjang Belanja
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex gap-4 p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-shadow items-center"
            >
              <div className="w-24 h-24 shrink-0 bg-white rounded-md overflow-hidden p-2 border">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg line-clamp-1 dark:text-white" title={item.title}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                    {item.category}
                  </p>
                  <p className="font-bold text-blue-600 dark:text-blue-400 mt-1">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:gap-6 w-full sm:w-auto">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-1 border dark:border-gray-600">
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="p-1 hover:bg-white dark:hover:bg-gray-600 rounded shadow-sm disabled:opacity-50 transition cursor-pointer dark:text-white"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium dark:text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-white dark:hover:bg-gray-600 rounded shadow-sm transition cursor-pointer dark:text-white"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right min-w-20">
                    <p className="font-bold text-lg dark:text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-gray-400 hover:text-red-500 p-2 transition ml-2 cursor-pointer"
                title="Hapus item"
              >
                🗑️
              </button>
            </div>
          ))}

          <div className="flex justify-end mt-4">
            <button
              onClick={handleClearCart}
              className="text-red-500 text-sm hover:text-red-700 hover:underline flex items-center gap-1 cursor-pointer"
            >
              🗑️ Kosongkan Keranjang
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border rounded-xl p-6 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 sticky top-24 shadow-sm text-gray-800 dark:text-gray-100">
            <h3 className="text-xl font-bold mb-6 dark:text-white">Ringkasan Pesanan</h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Pengiriman</span>
                <span className="text-green-600 dark:text-green-400 font-medium">Gratis</span>
              </div>
              <div className="border-t dark:border-gray-700 pt-4 flex justify-between font-bold text-xl mt-4 dark:text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-lg mb-4 cursor-pointer shadow-lg hover:shadow-xl transition-all">
              Checkout Sekarang
            </Button>

            <Link to="/" className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-blue-400 transition text-sm">
              ← Lanjut Belanja
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
