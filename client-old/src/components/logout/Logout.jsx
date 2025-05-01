import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Logout() {
    const { logout } = useAuthContext();
    const [loggedOut, setLoggedOut] = useState(false);

     //TODO: Server logout

    useEffect(() => {
        logout();
        setLoggedOut(true);
    }, [logout]);

    if (loggedOut) {
        return <Navigate to="/" />;
    }

    return null;
}