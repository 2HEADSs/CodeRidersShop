import { useEffect, useState } from 'react';
import { create, getAllBikes, getLastAdded, getOne } from '../api/bike-api';


export function useGetNeededBikes(lastFourAdded) {

    const [bikes, setBikes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            let result;
            if (lastFourAdded) {
                result = await getLastAdded();
            } else {
                result = await getAllBikes();

            }
            setLoading(false)
            setBikes(result)
        })()
    }, [lastFourAdded]);

    return [bikes, loading];
}


export function useGetOneBike(bikeId) {
    const [bike, setBike] = useState({ owner: {} });


    useEffect(() => {
        (async () => {
            const result = await getOne(bikeId);
            setBike(result)
        })()
    }, [bikeId])
    return [bike];
}

export async function useCreateBike(bikeData) {
    console.log(bikeData + "useCreateBike");

    const result = await create(bikeData);
    console.log(JSON.stringify(bikeData) + "from hook");
    console.log(result);

    return result

}

// export const useCreateBike = () => {
//     const createHandler = async (bikedata) => {
//         const result = await create(bikedata);
//         console.log(JSON.stringify(bikedata) + "from hook");
//         console.log(result);

//         console.log(bikedata + "useCreateBike");
//     }


//     return createHandler;
// }