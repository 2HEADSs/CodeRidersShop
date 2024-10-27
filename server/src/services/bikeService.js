import Bike from "../models/Bike.js";



async function createBike(requsetBody) {
    return Bike.create(requsetBody)
}

async function getAllBikes() {
    return Bike.find({});
}

async function getById(id) {
    return Bike.findById(id)
}

async function lastFourAdded() {
    return Bike.find({})
        .sort({ createdAt: -1 })
        .limit(4);
}


export { createBike, getAllBikes, getById, lastFourAdded }