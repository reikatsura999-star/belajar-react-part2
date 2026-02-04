//file ini mendefinikan type data di keranjang
// file ini gabungan dari product + quantity

import type { Product } from "./product";

export type cartItem = Product & {
    quantity: number
}