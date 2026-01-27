import { createContext, useState, useMemo, useCallback } from 'react'

// Buat context untuk cart
export const CartContext = createContext()

// Provider component untuk cart
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    // Tambah item ke cart (menggunakan useCallback untuk optimisasi)
    const addToCart = useCallback((product) => {
        setCartItems((prevItems) => {
            // Cek apakah item sudah ada di cart
            const existingItem = prevItems.find((item) => item.id === product.id)

            if (existingItem) {
                // Jika sudah ada, tambah quantity
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            // Jika belum ada, tambah item baru dengan quantity 1
            return [...prevItems, { ...product, quantity: 1 }]
        })
    }, [])

    // Hapus item dari cart
    const removeFromCart = useCallback((productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
    }, [])

    // Update quantity item
    const updateQuantity = useCallback((productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId)
            return
        }

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        )
    }, [removeFromCart])

    // Kosongkan cart
    const clearCart = useCallback(() => {
        setCartItems([])
    }, [])

    // Hitung total harga (menggunakan useMemo untuk optimisasi)
    const totalPrice = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }, [cartItems])

    // Hitung total jumlah item
    const totalItems = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }, [cartItems])

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
        totalItems
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


