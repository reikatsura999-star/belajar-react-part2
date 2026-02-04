// ambil data dari API dan ambil semua produk
import { useEffect,useState } from "react";
import type { Product } from "../types/product";
import axios from "axios";

export function useProducts() {
    const [products, setproducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function axiosProducts() {
           try {
            const res = await axios.get("https://fakestoreapi.com/products");
            setproducts(res.data);
           } catch (error) {
            setError("gagal memuat data produk")
           } finally {
            setLoading(false);
           }
        }
        axiosProducts();
    },[]);

    return {
        products,
        loading,
        error
    };
}