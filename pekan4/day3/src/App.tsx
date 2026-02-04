import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from './hook/Hook';
import { login, logout } from './features/auth/authSlice';

const AuthComponent = () => {
  const auth = useAppSelector(state => state.auth); // ambil state auth
  const dispatch = useAppDispatch();                // siap kirim action

  const [name, setName] = useState('');   // input name
  const [email, setEmail] = useState(''); // input email

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{auth.isLoggedIn ? `Hi, ${auth.user?.name}` : 'Not logged in'}</h1>

      {!auth.isLoggedIn && (
        <div>
          <input 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button 
            onClick={() => dispatch(login({ name, email }))} // dispatch login
            style={{ marginLeft: '10px' }}
          >
            Login
          </button>
        </div>
      )}

      {auth.isLoggedIn && (
        <div>
            <p>name: {auth.user?.name}</p>
            <p>email: {auth.user?.email}</p>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;
