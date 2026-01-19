import CartBadge from "../components/CartBadge";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function Home({ search, setSearch, category, setCategory }) {
     const {theme,ToggleTheme} = useContext(ThemeContext)
  return (
    <div className={`max-w-7xl mx-auto p-6 ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>

    <button onClick={ToggleTheme} className="bg-black text-white rounded-md p-2">ganti tema</button>
    
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
