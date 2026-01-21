import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { useNotification } from '../context/NotificationContext'

export function Profile() {
  const { user, isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { addNotification, notification } = useNotification();

  if (!isAuthenticated) {
    return <p className="text-center p-5 text-red-500 font-medium">Silahkan login terlebih dahulu</p>
  }

  const isLight = theme === 'light';

  return (
    <div className={`p-6 rounded-xl max-w-lg mx-auto my-5 shadow-lg transition-colors duration-300 ${isLight ? 'bg-slate-100 text-slate-900 border border-slate-200' : 'bg-slate-800 text-slate-100'}`}>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Profil User</h2>

      <div className="space-y-2 mb-6 text-sm md:text-base">
        <p><span className="font-semibold opacity-70">Email:</span> {user.email}</p>
        <p><span className="font-semibold opacity-70">ID:</span> {user.id}</p>
        <p><span className="font-semibold opacity-70">Tema:</span> <span className="capitalize px-2 py-0.5 rounded bg-blue-500/10 text-blue-500">{theme}</span></p>
        <p><span className="font-semibold opacity-70">Bahasa:</span> <span className="capitalize px-2 py-0.5 rounded bg-green-500/10 text-green-500">{language}</span></p>
        <p><span className="font-semibold opacity-70">Notifikasi:</span> <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-xs">{notification}</span></p>
      </div>

      <div className="flex flex-wrap gap-2 pt-4">
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
          onClick={toggleTheme}
        >
          {isLight ? '🌙 Mode Gelap' : '☀️ Mode Terang'}
        </button>

        <button
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium text-sm text-center"
          onClick={toggleLanguage}
        >
          🌐 Ganti Bahasa
        </button>

        <button
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium text-sm"
          onClick={addNotification}
        >
          🔔 Tambah Notif
        </button>

        <button
          className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors font-medium text-sm ml-auto"
          onClick={logout}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  )
}
