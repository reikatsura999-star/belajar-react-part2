function CrackerLink() {

    const handleClick = (e) => {
        e.preventDefault();
        alert('link berbahaya ya kali di klik');
        console.log('link di hentikan'); 
    }

    const handleChange = (e) => {
     (e.target.value) 
    }

    return(
        <>
            <div>
                <button onClick={handleClick}>klik here</button>
            </div>

            <div>
                <input type="text" onChange={handleChange} />
            </div>
        </>
    )
}
export default CrackerLink;