import { useState, useCallback } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/products"

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      setError("")

      if (!username || !password) {
        setError("Username dan password harus diisi")
        return
      }

      if (password.length < 4) {
        setError("Password minimal 4 karakter")
        return
      }

      login(username)
      navigate(from, { replace: true })
    },
    [username, password, login, navigate, from]
  )

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-sm">
        
        {/* Header */}
        <div className="text-center mb-6">
          <Link to="/" className="text-xl font-bold text-blue-600">
            ShopApp
          </Link>
          <p className="text-sm text-gray-500">
            Login untuk melanjutkan
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          <div>
            <label className="text-sm">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
