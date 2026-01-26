import { Navigate, Outlet } from "react-router-dom";

const validasi = () => {
   return localStorage.getItem('authToken') !== null
}

export function PrivateRoutes() {
   if (!validasi()) {
      return <Navigate to={'/'} replace />
   }
   return <Outlet />;
}