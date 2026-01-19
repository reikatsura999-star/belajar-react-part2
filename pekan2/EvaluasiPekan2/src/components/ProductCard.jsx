function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <img
        src={product.image}
        className="w-24 h-32 mx-auto object-contain"   
      />

      <h3 className="mt-3 text-sm font-semibold">
        {product.title}                              
      </h3>

      <p className="mt-2 font-bold text-gray-700">
        ${product.price}                              
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
