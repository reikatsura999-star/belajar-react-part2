import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    // Cek apakah user sudah login atau belum
    const isLoggedIn = localStorage.getItem('authToken') !== null;

    return (
        <div style={{ padding: "50px", textAlign: "center" }}>
            <h1>404 - Halaman Tidak Ditemukan</h1>
            <p>Maaf, halaman yang Anda cari tidak ada.</p>

            {isLoggedIn ? (
                // Tombol beranda cuma buat yang sudah login
                <button onClick={() => navigate('/dashboard', {replace: true})}>
                    Kembali ke Beranda
                </button>
            ) : (
                // Bagi yang belum login, arahkan ke login dahulu
                <button onClick={() => navigate('/', {replace: true})}>
                    Login Dahulu
                </button>
            )}
        </div>
    );
}

export default NotFound;