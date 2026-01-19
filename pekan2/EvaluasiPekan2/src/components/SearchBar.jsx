function SearchBar({onSearch}){
    return(
        <>
            <input 
                placeholder="Cari Product..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </>
    )
}

export default SearchBar;