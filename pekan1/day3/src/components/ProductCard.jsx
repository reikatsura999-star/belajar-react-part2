function ProductCard({ harga, stok, namaProduk, isAvailabel }) {
    return (
        <div className="border-2 border-gray p-10 m-10">
            <h3>Nama Product : {namaProduk} </h3>
            <p>harga : {harga}</p>
            <p>stok : {stok}</p>
            {isAvailabel && <p className="bg-green-500 inline-block px-3 py-1 rounded">Tersedia</p>}
        </div>
    )
}
export default ProductCard;