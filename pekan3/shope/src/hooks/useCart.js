import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

// Custom hook untuk mengelola logika cart
export function useCart() {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart harus digunakan dalam CartProvider')
    }

    return context
}
