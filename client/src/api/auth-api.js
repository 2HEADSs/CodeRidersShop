import requester from "./requester";

//TODO: export to .env
const BASE_URL = 'http://localhost:3000/user';


export const login = async (email, password) => {
    const userData = await requester.post(`${BASE_URL}/login`, { email, password });

    return userData;
}