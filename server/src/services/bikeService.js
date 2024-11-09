import Bike from "../models/Bike.js";



async function createBike(requsetBody) {
    return await Bike.create(requsetBody)
}

async function editBike(requsetBody) {
    return await Bike.findByIdAndUpdate(requsetBody._id, requsetBody);
}

async function getAllBikes() {
    return await Bike.find({});
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