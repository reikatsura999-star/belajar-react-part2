// file ini di buat untuk mendefinisikan type data product
// nanti di pakai di seluruh app (redux, component, dll)

export type Product = {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    image: string,
}