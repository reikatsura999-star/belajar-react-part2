import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 p-2">
            <div className="flex space-x-4 justify-center">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-blue-600 text-white py-2 px-4 rounded-md'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-md'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/profile/123"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-blue-600 text-white py-2 px-4 rounded-md'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-md'
                    }
                >
                    Profile
                </NavLink>
                <NavLink
                    to="/contact/jhon"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-blue-600 text-white py-2 px-4 rounded-md'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-md'
                    }
                >
                    Contact
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
