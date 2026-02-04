// ambil data API dan ambil satu produk aja

import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import axios from "axios";

export function useProductDetail(id: string | undefined) {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("id produk tidak tersedia");
      setProduct(undefined);
      setLoading(false);
      return;
    }

    async function axiosProduct() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (e) {
        setError("gagal memuat data produk");
      } finally {
        setLoading(false);
      }
    }
    axiosProduct();
  }, [id]);

  return {
    product,
    loading,
    error,
  };
}
