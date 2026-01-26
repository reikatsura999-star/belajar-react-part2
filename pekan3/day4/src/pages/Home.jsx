import { useNavigate } from "react-router-dom";

function Home(){
    const navigete = useNavigate()
    return(
        <>
            
            <div className="flex items-center justify-center min-h-screen flex-col">
                <h1>Home</h1>
                <button onClick={() => navigete('/profile/123')} className="border-2 mt-4 p-2 rounded-md">go to profile</button>

                <button onClick={() => navigete('/contact/jhon')} className="border-2 mt-4 p-2 rounded-md">go to Contact</button>

            </div>

        </>
    )
}

export default Home;