import Bike from "../models/Bike.js";



async function createBike(requsetBody) {
    return Bike.create(requsetBody)
}

async function editBike(requsetBody) {
    //todo: change implementation
    return Bike.create(requsetBody)
}

async function getAllBikes() {
    return Bike.find({});
}

async function getById(id) {
    return await Bike.findById(id);

    // return await Bike.findById(id).populate("owner", "email");
}

async function lastFourAdded() {
    return Bike.find({})
        .sort({ createdAt: -1 })
        .limit(4);
}


export { createBike, getAllBikes, getById, lastFourAdded, editBike }