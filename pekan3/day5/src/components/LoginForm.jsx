import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === 'admin' && pass === '123') {
            const tokenRandom = () => {
                const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

                let result = '';
                for (let i = 0; i < 32; i++) {
                    result += karakter.charAt(Math.floor(Math.random() * karakter.length));
                }
                return result
            }
            const authToken = tokenRandom();
            localStorage.setItem('authToken', authToken);
            alert('Login Berhasil')
            navigate('/dashboard', { state: { formLogin: true } })
        } else {
            alert('username dan password salah')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder="masukan nama anda"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    value={pass}
                    placeholder="masukan password"
                    onChange={(e) => setPass(e.target.value)}
                />

                <button type="submit">kirim</button>
            </form>
        </>
    )
}

