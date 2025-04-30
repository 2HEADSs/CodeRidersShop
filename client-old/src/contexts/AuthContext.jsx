import { createContext, useContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('user', {});

    const changeAuthState = (state) => {
        console.log(state);
        setAuthState(state)
    };

    const logout = () => {
        setAuthState(false);
    }

    const contextData = {
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.accessToken,
        userId: authState?._id,
        userEmail: authState.email,
        changeAuthState,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );

}

export function useAuthContext() {
    const authData = useContext(AuthContext);
    return authData;

}