import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log(`Fetching user data for userId: ${userId}`);
    // Simulasi fetching data dari API
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        setLoading(false);
      });
  }, [userId]); // Effect akan dijalankan ulang setiap kali userId berubah

  if (loading) return <p>Memuat data pengguna...</p>;
  if (!user) return <p>Pengguna tidak ditemukan.</p>;

  return (
    <div>
      <h2>Profil Pengguna</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Alamat: {user.address.city}</p>
    </div>
  );
}

export default UserProfile;

