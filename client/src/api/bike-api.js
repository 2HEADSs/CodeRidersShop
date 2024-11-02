import requester from "./requester";

const BASE_URL = 'http://localhost:3000/bikes';

const getAllBikes = async () => {
    try {
        const result = await requester.get(BASE_URL);
        return result;
    } catch (error) {
        return error
    }


};

const getLastAdded = async () => {
    try {
        const result = await requester.get(`${BASE_URL}/lastAdded`);
        return result;
    } catch (error) {
        return error
    }

};


const getOne = async (bikeId) => {
    try {
        const result = await requester.get(`${BASE_URL}/${bikeId}`);
        return result;
    } catch (error) {
        return error
    }
};

const create = async (bikeData) => {
    try {
        const result = await requester.post(`${BASE_URL}/create`, bikeData);
        return result
    } catch (error) {
        return error
    }
};

export {
    getAllBikes,
    getOne,
    getLastAdded,
    create
}