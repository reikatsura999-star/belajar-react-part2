import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Halaman yang Anda cari tidak ditemukan.</p>
            <Link to="/">Kembali ke Beranda</Link>
        </div>
    );
};

export default NotFound;
