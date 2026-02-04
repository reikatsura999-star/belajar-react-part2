import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import useAuth from '../hooks/useAuth'
function Checkout() {
    const { cartItems, totalPrice, clearCart } = useCart()
    const { user } = useAuth()
    const navigate = useNavigate()

    const handleConfirmCheckout = useCallback(() => {
        alert('Terima kasih! Pesanan kamu berhasil diproses.')
        clearCart()
        navigate('/products')
    }, [clearCart, navigate])

    if (cartItems.length === 0) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>
                <div className="bg-white rounded shadow p-6 text-center">
                    <p className="text-gray-600 mb-4">Tidak ada item untuk di-checkout</p>
                    <button
                        onClick={() => navigate('/products')}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Lihat Produk
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Order Summary */}
                <div className="bg-white rounded shadow p-4">
                    <h2 className="font-bold text-gray-800 mb-3">Ringkasan Pesanan</h2>

                    <div className="space-y-2 mb-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between text-sm">
                                <span className="text-gray-600">
                                    {item.title.substring(0, 25)}... x{item.quantity}
                                </span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t pt-3">
                        <div className="flex justify-between font-bold">
                            <span>Total:</span>
                            <span className="text-green-600">${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Checkout Form */}
                <div className="bg-white rounded shadow p-4">
                    <h2 className="font-bold text-gray-800 mb-3">Informasi Pengiriman</h2>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-gray-700 text-sm mb-1">Nama</label>
                            <input
                                type="text"
                                value={user?.username || ''}
                                readOnly
                                className="w-full px-3 py-2 border rounded bg-gray-50 text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm mb-1">Alamat</label>
                            <textarea
                                rows="2"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 text-sm"
                                placeholder="Masukkan alamat pengiriman"
                            />
                        </div>

                        <button
                            onClick={handleConfirmCheckout}
                            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                        >
                            Konfirmasi Pesanan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
