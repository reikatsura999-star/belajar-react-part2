import { NavLink } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import useAuth from '../hooks/useAuth'

function Navbar() {
    const { totalItems } = useCart()
    const { isLoggedIn, user, logout } = useAuth()

    return (
        <nav className="bg-white shadow py-4 px-6">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-xl font-bold text-blue-600">
                    ShopApp
                </h1>

                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
                        }
                    >
                        Products
                    </NavLink>

                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            `relative ${isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'}`
                        }
                    >
                        Cart
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </NavLink>

                    {isLoggedIn ? (
                        <div className="flex items-center gap-3">
                            <span className="text-gray-600 text-sm bg-blue-400 rounded-md px-2 py-1">Hi,{user?.username}</span>
                            <button onClick={logout} className="text-red-500 text-sm">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
                            }
                        >
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
