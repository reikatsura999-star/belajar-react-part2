import { useState, useMemo, useCallback } from "react"
import { ProductCard } from "../components/ProductCard"
import { ProductFilter } from "../components/ProductFilter"
import { useProducts } from "../hooks/useProducts"
import { useUser } from "../context/UserContext"
import { Navigate } from "react-router-dom"

export default function Home() {
  const { products, loading } = useProducts()
  const { user } = useUser()

  const [category, setCategory] = useState("all")

  if (!user) return <Navigate to="/login" />

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      return category === "all" || product.category === category
    })
  }, [products, category])

  const handleCategoryChange = useCallback((newCategory: string) => {
    setCategory(newCategory)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Filter Bar */}
        <div className="pt-12 pb-8">
          <ProductFilter
            category={category}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-slate-400 font-bold tracking-widest uppercase text-[10px]">Memuat Produk...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {filteredProducts.map(product => (
              <div key={product.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 opacity-50">
            <span className="text-6xl mb-4">📦</span>
            <p className="text-lg font-bold text-slate-400">Tidak ada produk ditemukan</p>
          </div>
        )}
      </div>
    </div>
  )
}
