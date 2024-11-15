import Bike from "../models/Bike.js";



async function createBike(requsetBody) {
    return await Bike.create(requsetBody)
}

async function editBike(requsetBody) {
    return await Bike.findByIdAndUpdate(requsetBody._id, requsetBody, { runValidators: true });
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
async function userBikes(ownerId) {
    return Bike.find({ owner: ownerId }).exec();
}

async function deleteById(_id) {
    try {
        const result = await Bike.deleteOne({ _id });
        if (result.deletedCount === 0) {
            throw new Error('No document found with that ID');
        }
        return result;
    } catch (error) {
        console.log('Error - deleting bike: bikeService' + error);
        throw error;
    }


}

export { createBike, getAllBikes, getById, lastFourAdded, editBike, deleteById, userBikes }