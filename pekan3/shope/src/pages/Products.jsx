import { useState, useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import { useProducts } from '../hooks/useProducts'

function Products() {
    const { products, loading, error } = useProducts()
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')

    // Mendapatkan daftar kategori unik dari produk
    const categories = useMemo(() => {
        const uniqueCategories = [...new Set(products.map(p => p.category))]
        return uniqueCategories.sort()
    }, [products])

    // Filter produk berdasarkan nama dan kategori
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesName = product.title.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesCategory = selectedCategory === '' || product.category === selectedCategory
            return matchesName && matchesCategory
        })
    }, [products, searchTerm, selectedCategory])

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
                        onClick={() => window.location.reload()}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Coba Lagi
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Daftar Produk</h1>

            {/* Filter Section */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Input Search Nama */}
                    <div className="flex-1">
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                            Cari Produk
                        </label>
                        <input
                            type="text"
                            id="search"
                            placeholder="Ketik nama produk..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Dropdown Kategori */}
                    <div className="sm:w-48">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                            Kategori
                        </label>
                        <select
                            id="category"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        >
                            <option value="">Semua Kategori</option>
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Info hasil filter */}
                <p className="mt-3 text-sm text-gray-500">
                    Menampilkan {filteredProducts.length} dari {products.length} produk
                </p>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">Tidak ada produk yang ditemukan</p>
                    <button
                        onClick={() => {
                            setSearchTerm('')
                            setSelectedCategory('')
                        }}
                        className="mt-4 text-blue-500 hover:underline"
                    >
                        Reset Filter
                    </button>
                </div>
            )}
        </div>
    )
}

export default Products
