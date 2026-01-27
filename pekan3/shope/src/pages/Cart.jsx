import { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useAuth } from '../contexts/AuthContext'

function Cart() {
    const { cartItems, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart()
    const { isLoggedIn } = useAuth()
    const navigate = useNavigate()

    const handleQuantityChange = useCallback((productId, newQuantity) => {
        updateQuantity(productId, parseInt(newQuantity))
    }, [updateQuantity])

    const handleRemove = useCallback((productId) => {
        removeFromCart(productId)
    }, [removeFromCart])

    const handleCheckout = useCallback(() => {
        if (isLoggedIn) {
            navigate('/checkout')
        } else {
            navigate('/login', { state: { from: { pathname: '/checkout' } } })
        }
    }, [isLoggedIn, navigate])

    if (cartItems.length === 0) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Keranjang Belanja</h1>
                <div className="bg-white rounded shadow p-6 text-center">
                    <p className="text-gray-600 mb-4">Keranjang belanja kamu kosong</p>
                    <Link
                        to="/products"
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Lihat Produk
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Keranjang Belanja ({totalItems} item)
            </h1>

            <div className="bg-white rounded shadow">
                {/* Cart Items */}
                <div className="divide-y">
                    {cartItems.map((item) => (
                        <div key={item.id} className="p-4 flex items-center gap-4">
                            {/* Product Image */}
                            <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain p-1"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex-grow">
                                <Link
                                    to={`/products/${item.id}`}
                                    className="text-gray-800 hover:text-blue-600 text-sm font-medium line-clamp-1"
                                >
                                    {item.title}
                                </Link>
                                <p className="text-green-600 text-sm">${item.price.toFixed(2)}</p>
                            </div>

                            {/* Quantity Control */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    className="w-7 h-7 bg-gray-200 rounded text-sm"
                                >
                                    -
                                </button>
                                <span className="w-6 text-center text-sm">{item.quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    className="w-7 h-7 bg-gray-200 rounded text-sm"
                                >
                                    +
                                </button>
                            </div>

                            {/* Item Total */}
                            <div className="text-right w-20">
                                <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={() => handleRemove(item.id)}
                                className="text-red-500 text-sm"
                            >
                                Hapus
                            </button>
                        </div>
                    ))}
                </div>

                {/* Cart Summary */}
                <div className="bg-gray-50 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Total:</span>
                        <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
                    </div>

                    <button
                        onClick={handleCheckout}
                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                    >
                        {isLoggedIn ? 'Checkout' : 'Login untuk Checkout'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
