import './App.css'
import { useAuth } from './context/AuthContext'
import { Login } from './components/Login'
import { Profile } from './pages/Profile'
import { ProductList } from './components/ProductList'
import { CartDisplay } from './components/CartDisplay'

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="p-5">
      <h1 className="text-center text-slate-800 text-3xl font-bold mb-8">Auth & Shopping App</h1>

      <div className="max-w-xl mx-auto mb-8">
        {isAuthenticated ? <Profile /> : <Login />}
      </div>

      {isAuthenticated && (
        <div className="mt-10">
          <h2 className="text-center text-slate-800 text-2xl font-semibold mb-6">🛒 Toko Online</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ProductList />
            <CartDisplay />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
