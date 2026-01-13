
import { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const buttonStyle = {
  padding: "8px 16px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#000",
  color: "#fff",
  cursor: "pointer",
  margin: "auto",
  
};

  

  return (
    <div className="flex justify-center p-4 ">
      {isEditing ? (
        <div className="flex flex-col items-center p-4 border-2 rounded-lg w-72">
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-black mb-3 p-2 rounded-lg text-center w-full"
          />

          <input
            type="number"
            placeholder="Usia"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="border-2 border-black mb-3 p-2 rounded-lg text-center w-full"
          />

         
          <button className='w-1/2' style={buttonStyle} onClick={() => setIsEditing(false)}>Simpan</button>
        </div>
        
      ) : (
        <div className="flex flex-col  p-4 border-2 rounded-lg w-72">
          <p className="mb-2 font-semibold">Nama: {name}</p>
          <p className="mb-2 font-semibold">Usia: {age}</p>
        

          <button className='w-1/2' style={buttonStyle} onClick={() => setIsEditing(true)}>
            Edit Profil
          </button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
