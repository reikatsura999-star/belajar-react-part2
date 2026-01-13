import { useRef } from "react";

function UncontrolForm() {

    const inputRef = useRef(null);

    const handleSubmit = (e) => {
     e.preventDefault();
     alert('nama yg di submit :' + inputRef.current.value);
     inputRef.current.value = ' ';
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nama :</label>
                <input type="text" name="name" ref={inputRef} defaultValue={'nyong'}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default UncontrolForm;