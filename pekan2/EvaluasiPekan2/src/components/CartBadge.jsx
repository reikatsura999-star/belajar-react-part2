import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
function CartBadge(){
    const {cart} = useContext(CartContext)
    return(
        <>
        <h3>jumlah 🛒:{cart.length}</h3>
        </>
    )
}
export default CartBadge;