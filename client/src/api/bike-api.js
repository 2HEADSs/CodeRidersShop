import requester from "./requester";

const BASE_URL = 'http://localhost:3000/bikes';

const getAllBikes = async () => {
    const result = await requester.get(BASE_URL);
    return result;
    // try {
    //     const result = await requester.get(BASE_URL);
    //     return result;
    // } catch (error) {
    //     return error
    // }


};

const getLastAdded = async () => {
    const result = await requester.get(`${BASE_URL}/lastAdded`);
    return result;
};


const getOne = async (bikeId) => {
    const result = await requester.get(`${BASE_URL}/${bikeId}`);
    return result;
};

const create = async (bikeData) => {
    const result = await requester.post(`${BASE_URL}/create`, bikeData);
    return result
};

export {
    getAllBikes,
    getOne,
    getLastAdded,
    create
}