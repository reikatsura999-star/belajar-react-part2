import './App.css'
import { useAuth } from './context/AuthContext'
import { Login } from './components/Login'
import { Profile } from './pages/Profile'
import { ProductList } from './components/ProductList'
import { CartDisplay } from './components/CartDisplay'

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Auth & Shopping App</h1>

      <div style={{ maxWidth: '600px', margin: '0 auto 30px' }}>
        {isAuthenticated ? <Profile /> : <Login />}
      </div>

      {isAuthenticated && (
        <div>
          <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>🛒 Toko Online</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
            <ProductList />
            <CartDisplay />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
