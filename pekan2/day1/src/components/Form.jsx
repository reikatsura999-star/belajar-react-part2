import { useState } from "react";

function FormIntens() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || name.length < 4) {
            alert('Nama harus lebih dari 4 karakter');
            return
        }

        if (!email || !email.includes('@')) {
            alert('Email tidak valid');
            return
        }

        if (!password) {
            alert('Password harus diisi');
            return;
        }

        if (password !== confirmPassword) {
            alert('Password harus sama');
            return
        }

        console.log({ name, email, password });
        alert('Selamat datang ' + name)

        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');


    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-green-200 p-8">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg max-w-md shadow-md w-90 flex flex-col space-y-6">
                    <h1 className="text-2xl font-bold mb-4 text-center">Form Intens</h1>


                    <label htmlFor="name" className="mb-1 font-medium text-bold">Name :</label>

                    <input type="text" value={name} placeholder="masukan nama" onChange={(e) => setName(e.target.value)} className="border px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />

                    <label htmlFor="email" className="mb-1 font-medium text-bold">Email :</label>

                    <input type="email" value={email} placeholder="masukan email" onChange={(e) => setEmail(e.target.value)} className="border px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />

                    <label htmlFor="password" className="mb-1 font-medium text-bold">Password :</label>

                    <input type="password" value={password} placeholder="masukan password" onChange={(e) => setPassword(e.target.
                        value)} className="border px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <label htmlFor="confirmPassword" className="mb-1 font-medium text-bold">Confirm Password :</label>

                    <input type="password" value={confirmPassword} placeholder="masukan konfirmasi password" onChange={(e) => setConfirmPassword(e.target.value)} className="border px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />

                    <button type="submit" className="bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition-colors mt-2">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormIntens


