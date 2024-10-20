import { login } from "../api/auth-api"

export const useLogin = () => {
    const loginHandler = async (email, password) => {
        try {
            const result = await login(email, password);

            //TODO: localstorage
            localStorage.setItem("user", JSON.stringify(result));

        } catch (error) {
            //TODO : error state- error handling
            console.log(error.message);

        }
    }

    return loginHandler
}