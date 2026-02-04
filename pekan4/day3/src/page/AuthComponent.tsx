
import { useAppSelector, useAppDispatch } from '../hook/Hook'; // import hook
import { login, logout } from '../features/auth/authSlice'; // import action

const AuthComponent = () => {
  const auth = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{auth.isLoggedIn ? `Hi, ${auth.user?.name}` : 'Not logged in'}</h1>
      <button onClick={() => dispatch(login({ name: 'Nyong', email: 'nyong@email.com' }))}>
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default AuthComponent;
