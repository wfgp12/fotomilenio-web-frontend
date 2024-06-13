import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/store/hooks";
import { ProtectedLayout } from "../components";

export const ProtectedRoutes = () => {
    let auth = useAppSelector(state => state.auth)
    let location = useLocation();

    //TODO: agregar validación de autorización
    return (auth.isAuth)
        ? <Navigate to="/login" state={{ from: location }} replace />
        : <Outlet />
}

export const ProtectedDashboardRoutes = () => {
    return <ProtectedLayout>
        <Outlet />
    </ProtectedLayout>
}