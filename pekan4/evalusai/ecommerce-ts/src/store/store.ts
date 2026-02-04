// File ini untuk MENGGABUNGKAN semua slice Redux
// dan menghubungkan Redux ke React

import { configureStore } from "@reduxjs/toolkit"
import {cartReducer} from "./cartSlice"

//fungsi buat load data keranjang
function loadCart() {
  try {
    const data = localStorage.getItem("cart"); //mengambil data dari local storage

    if (!data) return undefined

    return {cart: JSON.parse(data)}

  } catch (error) {

    return undefined;
  }
}

export const store = configureStore({ 
  reducer: {
     cart: cartReducer //menghubungkan cartReducer ke store
 },
  preloadedState: loadCart(), //mengambil data keranjang dari local storage
})

//nyimpen data keranjang secara real time
store.subscribe(() => {
  const state = store.getState(); //mengambil state global
  localStorage.setItem("cart",JSON.stringify(state.cart)); //menyimpan data keranjang ke local storage
})

// Type global state Redux
// Dipakai di useSelector
export type RootState = ReturnType<typeof store.getState>

// Type dispatch Redux
// Dipakai di useDispatch
export type AppDispatch = typeof store.dispatch //ya intinya dispatch itu fungsi buat update state
