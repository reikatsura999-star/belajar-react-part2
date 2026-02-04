import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { useProductDetail } from "../hooks/useProductDetail";
import { useParams, Link } from "react-router-dom";
import { addTocart } from "../store/cartSlice";

export function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();

    const { product, loading, error } = useProductDetail(id);

    if (loading) return <div className="p-10 text-center dark:text-white">Sedang memuat...</div>;
    if (error || !product) return <div className="p-10 text-center text-red-500">{error || "Produk tidak ditemukan"}</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 text-gray-800 dark:text-gray-100">

            {/* Tombol Kembali */}
            <Link to="/" className="text-blue-500 hover:underline mb-6 inline-block dark:text-blue-400">
                ← Kembali ke Toko
            </Link>


            <div className="grid md:grid-cols-2 gap-10">
                
                {/* Bagian Gambar */}
                <div className="flex justify-center border dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-100">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-80 object-contain"
                    />
                </div>

                {/* Bagian Informasi */}
                <div className="flex flex-col gap-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                        {product.category}
                    </span>

                    <h1 className="text-2xl font-bold dark:text-white">
                        {product.title}
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="mt-4">
                        <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                            ${product.price}
                        </span>
                    </div>

                    <button
                        onClick={() => dispatch(addTocart({ ...product, quantity: 1 }))}
                        className="mt-4 bg-blue-600 text-white rounded-lg py-3 px-6 hover:bg-blue-700 transition cursor-pointer font-semibold shadow-lg shadow-blue-200 dark:shadow-none"
                    >
                        Tambah ke Keranjang 🛒
                    </button>
                </div>
            </div>
        </div>
    );
}
