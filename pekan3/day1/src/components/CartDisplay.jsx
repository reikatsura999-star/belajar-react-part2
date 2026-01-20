import { useCart } from '../context/CartContext'

export function CartDisplay() {
  const { cart, removeItem, clearCart, total } = useCart()

  if (cart.length === 0) {
    return <div style={{ padding: '20px', textAlign: 'center', color: '#7f8c8d' }}><h2>Keranjang Kosong</h2></div>
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Keranjang ({cart.length} item)</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #ecf0f1', marginBottom: '10px', borderRadius: '5px' }}>
          <div>
            <p style={{ margin: '0', fontWeight: 'bold' }}>{item.name}</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#7f8c8d' }}>Rp {item.price.toLocaleString('id-ID')} × {item.qty}</p>
          </div>
          <button onClick={() => removeItem(item.id)} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Hapus</button>
        </div>
      ))}
      <div style={{ marginTop: '20px', padding: '15px', background: '#ecf0f1', borderRadius: '5px', textAlign: 'right' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#27ae60', margin: '0' }}>Total: Rp {total.toLocaleString('id-ID')}</p>
      </div>
      <button onClick={clearCart} style={{ width: '100%', marginTop: '10px', background: '#95a5a6', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>Kosongkan Keranjang</button>
    </div>
  )
}
