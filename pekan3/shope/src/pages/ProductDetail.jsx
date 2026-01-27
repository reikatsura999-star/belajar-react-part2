import { useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useProduct } from '../hooks/useProducts'

function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { addToCart } = useCart()
    const { product, loading, error } = useProduct(id)

    const handleAddToCart = useCallback(() => {
        if (product) {
            addToCart(product)
        }
    }, [addToCart, product])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-600">Loading...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-xl text-red-600 mb-4">Error: {error}</p>
                    <button
                        onClick={() => navigate('/products')}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Kembali ke Produk
                    </button>
                </div>
            </div>
        )
    }

    if (!product) return null

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <button
                onClick={() => navigate('/products')}
                className="text-blue-600 mb-4"
            >
                ← Kembali ke Produk
            </button>

            <div className="bg-white rounded shadow p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Product Image */}
                    <div className="bg-gray-100 rounded p-6 flex items-center justify-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="max-h-64 object-contain"
                        />
                    </div>

                    {/* Product Info */}
                    <div>
                        <p className="text-sm text-gray-500 mb-2">{product.category}</p>

                        <h1 className="text-xl font-bold text-gray-800 mb-3">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-yellow-500">★</span>
                            <span className="text-gray-600 text-sm">
                                {product.rating?.rate} ({product.rating?.count} reviews)
                            </span>
                        </div>

                        <p className="text-2xl font-bold text-green-600 mb-4">
                            ${product.price.toFixed(2)}
                        </p>

                        <p className="text-gray-600 text-sm mb-4">
                            {product.description}
                        </p>

                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
