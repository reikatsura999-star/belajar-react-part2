import cartReducer from "../reducers/CartReducer";
import { createContext, useReducer } from "react";

export const CartContext = createContext()
export function CartProvider({children}){
    const [cart,dispatch] = useReducer(cartReducer,[])
    
    const addToCart = (product) => {
        dispatch({type:"ADD_TO_CART",payLoad:product})
    }
    return(
        <>
       <CartContext.Provider value={{cart,addToCart}}>
        {children}
       </CartContext.Provider>
        </>
    )
}