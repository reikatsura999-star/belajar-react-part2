import { useNavigate, useParams } from "react-router-dom";
function Contact(){
    const navigete = useNavigate()
    const {name} = useParams();

    return(
        <>
            <div className="flex items-center justify-center min-h-screen flex-col">
                <h1>this is myContact</h1>
                <p>Name User : {name}</p>
                <p>Email : RandomAcount@gmail.com</p>

                <button onClick={() => navigete('/')} className="border-2 mt-4 p-2 rounded-md">go to Home</button>
            </div>
        </>
    )
}

export default Contact;