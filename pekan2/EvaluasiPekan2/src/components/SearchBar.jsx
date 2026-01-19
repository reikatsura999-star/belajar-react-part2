function SearchBar({onSearch}){
    return(
        <>
            <input 
                placeholder="Cari Product..."
                onChange={(e) => onSearch(e.target.value)}
                className="max-w-7xl mx-auto px-6 mb-6 bg-blue-300 border rounded-md"
            />
        </>
    )
}

export default SearchBar;