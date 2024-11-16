import requester from "./requester";

const BASE_URL = 'http://localhost:3000/bikes';

const getAllBikes = async () => {
    return await requester.get(BASE_URL);
    // try {
    //     const result = await requester.get(BASE_URL);
    //     return result;
    // } catch (error) {
    //     return error
    // }
};

const getLastAdded = async () => {
    return await requester.get(`${BASE_URL}/lastAdded`);
};

const getUserBikes = async () => {
    return await requester.get(`${BASE_URL}/userBikes`);
};


const getOne = async (bikeId) => {
    return await requester.get(`${BASE_URL}/${bikeId}`);

};

const create = async (bikeData) => {
    return await requester.post(`${BASE_URL}/create`, bikeData);
};

const edit = async (bikeData) => {
    // const bikeId = bikeData._id;
    return await requester.put(`${BASE_URL}/${bikeData._id}/edit`, bikeData);
};

const remove = async (bikeId) => requester.del(`${BASE_URL}/${bikeId}/deleteBike`);

const addToWishList = async (bikeId) => requester.post(`${BASE_URL}/${bikeId}`)


export {
    getAllBikes,
    getLastAdded,
    getUserBikes,
    getOne,
    create,
    edit,
    remove,
    addToWishList
}