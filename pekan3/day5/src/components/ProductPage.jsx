import { useSearchParams } from "react-router-dom";

const PRODUCT_LIST = [
    { id: 1, name: "iPhone 15", category: "Electronics", price: 15000000 },
    { id: 2, name: "MacBook Pro", category: "Electronics", price: 25000000 },
    { id: 3, name: "Nike Air Jordan", category: "Fashion", price: 2000000 },
    { id: 4, name: "Adidas Ultraboost", category: "Fashion", price: 1800000 },
    { id: 5, name: "Coffee Maker", category: "Home", price: 1200000 },
    { id: 6, name: "Desk Lamp", category: "Home", price: 350000 },
    { id: 7, name: "fried chicken", category: "Food", price: 15000}
];

export default function ProductPage() {
    const [urlParams, setUrlParams] = useSearchParams();

    // baca paramater dari from URL
    const selectedCategory = urlParams.get("category") || "All";
    const searchText = urlParams.get("search") || "";

    // filter products
    const visibleProducts = PRODUCT_LIST.filter((item) => {
        const categoryMatch =
            selectedCategory === "All" || item.category === selectedCategory;

        const searchMatch =
            item.name.toLowerCase().includes(searchText.toLowerCase());

        return categoryMatch && searchMatch;
    });

    // change category
    const changeCategory = (newCategory) => {
        setUrlParams({
            category: newCategory,
            search: searchText,
        });
    };

    // change search text
    const changeSearch = (e) => {
        const text = e.target.value;
        setUrlParams({
            category: selectedCategory,
            search: text,
        });
    };

    // reset all filters
    const resetAll = () => {
        setUrlParams({});
    };

    return (
        <div>
            <h1>Product List</h1>

            <input
                placeholder="Search product..."
                value={searchText}
                onChange={changeSearch}
            />

            <select
                value={selectedCategory}
                onChange={(e) => changeCategory(e.target.value)}
            >
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
                <option value="Food">Food</option>
            </select>

            <button onClick={resetAll}>Reset</button>

            <p>
                Category: <b>{selectedCategory}</b> | Search: <b>{searchText || "-"}</b>
            </p>

            {visibleProducts.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                    <p>Rp {item.price.toLocaleString("id-ID")}</p>
                </div>
            ))}
        </div>
    );
}
