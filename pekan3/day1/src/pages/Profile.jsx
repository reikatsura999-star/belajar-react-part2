import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { useNotification } from '../context/NotificationContext'

export function Profile() {
  const { user, isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { addNotification, notification } = useNotification();

  const containerStyle = {
    background: theme === 'light' ? '#f5f5f5' : '#1a1a1a',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    margin: '20px auto'
  }

  const buttonStyle = {
    background: theme === 'light' ? '#007bff' : '#0056b3',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    marginTop: '10px'
  }

  if (!isAuthenticated) {
    return <p>Silahkan login terlebih dahulu</p>
  }

  return (
    <div style={containerStyle}>
      <h2>Profil User</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Tema saat ini:</strong> {theme}</p>
      <p><strong>Bahasa saat ini:</strong> {language}</p>
      <p><strong>Notifikasi saat ini:</strong> {notification}</p>

      <button style={buttonStyle} onClick={toggleTheme}>
        Ubah Tema
      </button>

      <button style={{ ...buttonStyle, background: theme === 'light' ? '#dc3545' : '#c82333' }} onClick={logout}>
        Logout
      </button>

      <button style={buttonStyle} onClick={toggleLanguage}>Ganti Bahasa</button>

      <button style={buttonStyle} onClick={addNotification}>Notifikasi</button>
    </div>
  )
}
