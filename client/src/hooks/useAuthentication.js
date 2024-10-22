import { login, register } from "../api/auth-api"

export const useLogin = () => {
    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        //TODO: localstorage
        localStorage.setItem("user", JSON.stringify(result));

        console.log(result);

    }
    return loginHandler;
}

export const useRegister = () => {
    const registerHandler = async (email, password, repass) => {
        const result = await register(email, password, repass);
        //TODO: localstorage
        localStorage.clear()
        localStorage.setItem("user", JSON.stringify(result));

        console.log(result);

    }
    return registerHandler;
}