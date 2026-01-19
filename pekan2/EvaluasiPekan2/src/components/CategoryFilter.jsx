function CategoryFilter({onSelect}){
    return(
        <>
            <select onChange={(e) => onSelect(e.target.value)}>
                <option value="all">All</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
            </select>
        </>
    )
}

export default CategoryFilter;