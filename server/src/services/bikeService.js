import Bike from "../models/Bike.js";



async function createBike(requsetBody) {

    return Bike.create(requsetBody)

}

export { createBike }