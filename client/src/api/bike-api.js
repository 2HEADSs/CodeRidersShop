import requester from "./requester";

const BASE_URL = 'http://localhost:3000/bikes';

export const getAllBikes = async () => {

    const result = await requester.get(BASE_URL);
    console.log(result);

    return result;
};