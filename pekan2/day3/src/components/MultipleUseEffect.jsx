import { useState,useEffect } from "react";
function MultipleUseEffect(){
    
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `you clicked ${count} times`
    },[count])

    useEffect(() => {
        console.log(`name change to ${name}`);
        
    })

    return(
        <>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>tambah</button>
            <button onClick={() => setCount(prevCount => prevCount -1)}>kurang</button>

            <input 
                type="text"
                placeholder="inputkan sesuatu... "
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </>
    )
}
export default MultipleUseEffect;