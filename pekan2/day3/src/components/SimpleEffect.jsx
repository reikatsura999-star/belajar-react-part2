import { useEffect } from "react";
function SimpleEffect(){
    useEffect(() => {
        console.log('tanpa depedency ([]) bakal di render terus');
        
    })
    return(
        <>
        <h1>Simple Effect</h1>
        <p>ini simple effect</p>
        </>
    )
}
export default SimpleEffect;