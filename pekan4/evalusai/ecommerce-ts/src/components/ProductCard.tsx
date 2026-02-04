import type { FC } from "react"

import type { Product } from "../types/product"
import { addTocart } from "../store/cartSlice"
import { useAppDispatch } from "../hooks/useRedux"
import { Link } from "react-router-dom"

type Props = {
  product: Product
}

export const ProductCard: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Mencegah navigasi Link saat klik tombol
    dispatch(
      addTocart({
        ...product,
        quantity: 1,
      })
    )
  }

  // Randomize rating for aesthetics since API might not provide it
  const rating = 4.5
  const reviews = Math.floor(Math.random() * 100) + 10

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden h-full">
      {/* Product Category Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-100 rounded-full shadow-sm backdrop-blur-sm border border-gray-100 dark:border-gray-700">
          {product.category}
        </span>
      </div>

      <Link to={`/products/${product.id}`} className="flex-1 flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />

          {/* View Detail Overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform flex items-center gap-2">
              Lihat Detail →
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1 truncate">
            {product.category}
          </h3>
          <h2 className="text-gray-900 dark:text-white font-bold text-base line-clamp-2 mb-2 min-h-12">
            {product.title}
          </h2>

          <div className="flex items-center gap-1 mb-4">
            <div className="flex items-center text-yellow-400 text-xs">
              ⭐⭐⭐⭐
            </div>
            <span className="text-xs text-gray-400 font-medium">({reviews})</span>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 line-through font-medium">
                ${(product.price * 1.2).toFixed(2)}
              </span>
              <span className="text-xl font-black text-blue-600 dark:text-blue-400">
                ${product.price}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-200 dark:shadow-none hover:scale-110 active:scale-95 transition-all cursor-pointer group/btn"
              title="Tambah ke Keranjang"
            >
              🛒
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}
