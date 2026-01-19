import CartBadge from "../components/CartBadge";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

function Home({ search, setSearch, category, setCategory }) {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-blue-300">
    
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex gap-4">
          <SearchBar onSearch={setSearch} />         
          <CategoryFilter onSelect={setCategory} />  
        </div>

        <CartBadge />                                 
      </div>

      
      <ProductList
        search={search}
        category={category}
      />
    </div>
  );
}

export default Home;
