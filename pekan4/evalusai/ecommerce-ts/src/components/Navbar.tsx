import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../context/UserContext"
import { useTheme } from "../context/ThemeContext"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"


export function Navbar() {
  const { user, logout } = useUser()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  //fungsi buat handle logout
  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-gray-900 dark:text-white transition-colors duration-200">
      <Link to="/" className="text-xl font-bold hover:opacity-80">
        ShopApp
      </Link>

      <div className="flex items-center gap-4">
        {user && (
          <>
            <span className="hidden md:block text-sm text-gray-600 dark:text-gray-300">
              Hi, {user.name}
            </span>
            <Link
              to="/cart"
              className="relative text-sm font-medium hover:text-blue-600 transition p-2"
            >
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </>
        )}

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          title="Toggle Theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {user ? (
          <button
            onClick={handleLogout}
            className="text-sm bg-red-500 text-white px-3 py-1.5 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}
