import { useNavigate, useParams } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const {id} = useParams()
    return (
        <div className="flex items-center justify-center min-h-screen flex-col">
            <h1>Profile</h1>
            <img src="https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png"/>
            <p>user : {id}</p>
            <button onClick={() => navigate('/')} className="border-2 mt-4 p-2 rounded-md">
              go to  Home
            </button>
        </div>
    );
}

export default Profile;
