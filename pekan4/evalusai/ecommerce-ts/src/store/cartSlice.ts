//file buatngatur logika di keranjang
// yaitu tambah item, hapus item, update quantity, dan kosongkan keranjang


import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { cartItem } from "../types/cart";

//bikin type state sesuai dgn cartItem
type cartState = {
    items: cartItem[];
}

//nilai awal cart kosong
const initialState: cartState = {
    items: []
}


const cartSlice = createSlice({
    name: "cart", //nama slice
    initialState,
    reducers: {   //tools buat update state
    
        //menambah item ke keranjang
        addTocart:(state,action:PayloadAction<cartItem>) => {
            const existing = state.items.find(i => i.id === action.payload.id); //cari dulu ada gak
            if(existing){
                existing.quantity += action.payload.quantity; //kalau  ada nambah quantitynya
                }else{
                    state.items.push(action.payload); //kalau gak ada tambah item
                }
        },
        
        //menghapus item dari keranjang
        removeFromCart:(state,action:PayloadAction<number>) => {
            state.items = state.items.filter(i => i.id  !== action.payload)
        },

        //update quantity item
        updateQuantity:(state,action:PayloadAction<{id:number,quantity:number}>) => {
            const item = state.items.find(i => i.id === action.payload.id); //di cari id itemnya
            if(item){
                item.quantity = action.payload.quantity  //kalau ada maka update quantitynya
            }
        },
        
        //kosongkan keranjang
        clearCart:(state) => {
            state.items = [];
        }

    }     
})

export const {addTocart,removeFromCart,updateQuantity,clearCart} = cartSlice.actions; //menghubungkan action ke store

export const cartReducer = cartSlice.reducer; //menghubungkan cartSlice ke store

