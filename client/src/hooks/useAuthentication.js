import { useContext } from "react";
import { login, register } from "../api/auth-api"
import { AuthContext } from "../contexts/authContext";


export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);
    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        //TODO: SESSION TO STATE
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(result));
        changeAuthState(result);
        return result;
    }
    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password, repass) => {
        const result = await register(email, password, repass);
        //TODO: SESSION TO STATE
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(result));
        changeAuthState(result);
        return result;

    }
    return registerHandler;
}