import { login, register } from "../api/auth-api"
import { useAuthContext } from "../contexts/authContext";


export const useLogin = () => {
    const { changeAuthState } = useAuthContext();
    const loginHandler = async (email, password) => {
        const result = await login(email, password);

        //TODO: SESSION TO STATE
        // localStorage.clear();
        // localStorage.setItem("user", JSON.stringify(result));
        console.log(result);

        changeAuthState(result);
        return result;
    }
    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password, repass) => {
        const result = await register(email, password, repass);
        //TODO: SESSION TO STATE
        // localStorage.clear();
        // localStorage.setItem("user", JSON.stringify(result));
        changeAuthState(result);
        return result;

    }
    return registerHandler;
}