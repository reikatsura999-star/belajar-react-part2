import { useState } from "react";

function ControlForm() {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        setName('');
    }

    return(
        <form onSubmit={handleSubmit}>
         <label htmlFor="name">Name</label>
         <input type="text" value={name} onChange={handleChange} />
         <p>Anda mengetik :{name}</p>
         <button type="submit">Submit</button>
        </form>
    )
}
export default ControlForm;