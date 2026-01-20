import { useCart } from '../context/CartContext'

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 15000000 },
  { id: 2, name: 'Mouse', price: 500000 },
  { id: 3, name: 'Keyboard', price: 1200000 },
  { id: 4, name: 'Monitor', price: 3500000 },
]

export function ProductList() {
  const { addItem } = useCart()

  return (
    <div>
      <h2>Produk</h2>
      <div>
        {PRODUCTS.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Rp {product.price.toLocaleString('id-ID')}</p>
            <button onClick={() => addItem(product)}>Tambah</button>
          </div>
        ))}
      </div>
    </div>
  )
}
