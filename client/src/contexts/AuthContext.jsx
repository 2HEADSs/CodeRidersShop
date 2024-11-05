import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        console.log(state);

        // localStorage.clear();
        localStorage.setItem('user', JSON.stringify(state))
        setAuthState(state)
    };

    const contextData = {
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.accessToken,
        changeAuthState
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