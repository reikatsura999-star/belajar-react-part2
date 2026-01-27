import { memo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

function ProductCard({ product }) {
    const { addToCart } = useCart()

    const handleAddToCart = useCallback((e) => {
        e.preventDefault()
        e.stopPropagation()
        addToCart(product)
    }, [addToCart, product])

    return (
        <div className="bg-white rounded shadow p-4">
            <Link to={`/products/${product.id}`}>
                <div className="h-40 flex items-center justify-center mb-3">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
            </Link>

            <Link to={`/products/${product.id}`}>
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 h-10 hover:text-blue-600">
                    {product.title}
                </h3>
            </Link>

            <p className="text-gray-500 text-xs mt-1">{product.category}</p>

            <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-bold text-green-600">
                    ${product.price.toFixed(2)}
                </span>

                <button
                    onClick={handleAddToCart}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default memo(ProductCard)
