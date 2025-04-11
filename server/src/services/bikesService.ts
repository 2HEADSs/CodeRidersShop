import prisma from "../prismaClient";
import { BikeCreate } from "../types";

async function getAllBikes() {
    const allBikes = await prisma.bike.findMany({});
    console.log(allBikes);
}

//TODO: owmerId from token > refactoring;
async function createBike(requestBody: BikeCreate, ownerId: string) {
    // const createdBike = await prisma.bike.create({
    //     data: {
    //         ...requestBody,
    //         owner: {
    //             connect: {
    //                 id: ownerId,
    //             },
    //         },
    //     },
    // });
    console.log('bikeService user:', ownerId);

    return true
    // return createdBike;
}




export {
    getAllBikes,
    createBike
}