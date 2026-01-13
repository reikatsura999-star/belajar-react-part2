import { useState } from "react";
function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [isEditing, setIsEditing] = useState(false);


    const buttonStyle = {
        padding: '8px 16px',
        borderRadius: '6px',
        backgroundColor: '#000',
        color: '#fff',
        cursor: 'pointer',
        border: 'none',
        margin: 'auto'
    }
    return (
        <div className="flex justify-center p-4">
            {isEditing ? (

                <div className="flex flex-col items-center p-4 border-2 rounded-lg w-72">
                    <input
                        type="text"
                        placeholder="Masukan nama Anda"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-2 border-black mb-3  p-2 rounded-lg text-center w-full"
                    />

                    <input
                        type="email"
                        placeholder="masukan email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-black mb-3  p-2 rounded-lg text-center w-full"
                    />

                    <input type="number"
                        placeholder="masukan usia"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="border-2 border-black mb-3  p-2 rounded-lg text-center w-full"
                    />


                    <button style={buttonStyle} onClick={() => setIsEditing(false)}>simpan</button>
                </div>

            ) : (
                <div className="flex flex-col  p-4 border-2 rounded-lg w-72">
                    <p className="mb-2 font-semibold">Nama:{name}</p>
                    <p className="mb-2 font-semibold">Email:{email}</p>
                    <p className="mb-2 font-semibold">Usia:{age}</p>
                    <button style={buttonStyle} onClick={() => setIsEditing(true)}>edit</button>
                </div>
            )}
        </div>
    );
}

export default ContactForm;
