function CrackerMouse() {

    const handleClick = () => {
        alert('You clicked the cracker mouse');
    }

    const doubleClick = () => {
        alert('You double clicked the cracker mouse');
    }
    const mouseEnter = () => {
        alert('You hovered over the cracker mouse');
    }
    const mouseLeave = () => {
        alert('You left the cracker mouse');
    }
     
    return(
        <>
            <button onClick={handleClick}>klik sekali</button>
            <button onDoubleClick={doubleClick}>klik dua kali</button>
            <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>klik masuk</button>
           
        </>
    )
}
export default CrackerMouse;