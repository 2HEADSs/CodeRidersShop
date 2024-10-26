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
export { createBike, getAllBikes, getById }