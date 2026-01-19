import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { CartContext } from "../context/CartContext.jsx"
function ProductList({ search, category }) {
    const { addToCart } = useContext(CartContext)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('https://fakestoreapi.com/products')
                setProducts(res.data)
            } catch (error) {
                setError(error.message)
                console.log(error);

            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [])

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    const filteredProduct = products.filter((p) => {
        const searchMatch = p.title
            .toLowerCase()
            .includes(search.toLowerCase())
        const categoryMatch = category === 'all' || p.category === category

        return searchMatch && categoryMatch
    })

    return (
        <div className="grid grid-cols-2  gap-6">
            {filteredProduct.map((p) => (
                <ProductCard
                    key={p.id}
                    product={p}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );


}

export default ProductList;