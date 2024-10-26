import Bike from "../models/Bike.js";



async function createBike(requsetBody) {
    return Bike.create(requsetBody)
}

async function getAllBikes(params) {
    return Bike.find({});
}

export { createBike, getAllBikes }