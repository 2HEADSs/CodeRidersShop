import { login } from "../api/auth-api"

export const useLogin = () => {
    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        //TODO: localstorage
        localStorage.setItem("user", JSON.stringify(result));

        console.log(result);

    }
    return loginHandler;
}