import { useState, useEffect } from "react"
import axios from "axios"

const API_URL = "https://fakestoreapi.com/products"

/* =======================
   Hook ambil SEMUA produk
======================= */
export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get(API_URL)
      setProducts(res.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { products, loading, error }
}

/* =======================
   Hook ambil SATU produk
======================= */
export function useProduct(id) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    fetchData()
  }, [id])

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}/${id}`)
      setProduct(res.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { product, loading, error }
}
