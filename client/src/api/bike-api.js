import requester from "./requester";

const BASE_URL = 'http://localhost:3000/bikes';

const getAllBikes = async () => {

    const result = await requester.get(BASE_URL);

    return result;
};

const getLastAdded = async () => {

    const result = await requester.get(`${BASE_URL}/lastAdded`);

    return result;
};


const getOne = async (bikeId) => {

    const result = await requester.get(`${BASE_URL}/${bikeId}`);
    console.log(result);

    return result;
};

export {
    getAllBikes,
    getOne,
    getLastAdded
}