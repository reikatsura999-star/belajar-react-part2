function CategoryFilter({ onSelect }) {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-6">
      <select
        onChange={(e) => onSelect(e.target.value)}     // kirim value ke parent
        className="border rounded-md px-4 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
