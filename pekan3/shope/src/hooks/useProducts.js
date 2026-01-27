import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = 'https://fakestoreapi.com/products'

export function useProducts() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(API_URL)
            .then(res => setProducts(res.data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [])

    return { products, loading, error }
}

export function useProduct(id) {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!id) return

        axios.get(`${API_URL}/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [id])

    return { product, loading, error }
}
