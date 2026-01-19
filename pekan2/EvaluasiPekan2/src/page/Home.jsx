import CartBadge from "../components/CartBadge";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

function Home({ search, setSearch, category, setCategory }) {
    return (
        <>
           <div className="max-w-7xl mx-auto p-6 bg-blue-300">
            <CartBadge />
            <ProductList search={search} category={category} />
            <CategoryFilter onSelect={setCategory} />
            <SearchBar onSearch={setSearch} />

           </div>
        </>
    )
}

export default Home;