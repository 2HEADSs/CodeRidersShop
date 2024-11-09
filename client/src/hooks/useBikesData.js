import { useEffect, useState } from 'react';
import { create, edit, getAllBikes, getLastAdded, getOne } from '../api/bike-api';


export function useGetNeededBikes(lastFourAdded) {

    const [bikes, setBikes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [serverError, setServerError] = useState("")

    useEffect(() => {
        (async () => {
            let result = [];
            try {
                if (lastFourAdded) {
                    result = await getLastAdded();
                } else {
                    result = await getAllBikes();
                }
            } catch (error) {
                setServerError(error.message)
            }

            setLoading(false)
            setBikes(result);
        })()
    }, [lastFourAdded]);

    return [bikes, loading, serverError];
};


export function useGetOneBike(bikeId) {
    //todo: remove owner
    const [bike, setBike] = useState({});
    const [error, setError] = useState('')


    useEffect(() => {
        (async () => {
            let result = [];

            try {
                result = await getOne(bikeId);
                if (result !== null) {
                    setBike(result);
                    setError('');
                } else {
                    setError('Bike do not exist.');
                    setBike([])
                }
            } catch (error) {
                setError(error)
            }


        })()
    }, [bikeId])
    return [bike, error];
};

export async function useCreateBike(bikeData) {

    return await create(bikeData);

};


export async function useEditBike(bikeData) {
    return await edit(bikeData);
};


// export const useCreateBike = () => {
//     const createHandler = async (bikedata) => {
//         const result = await create(bikedata);
//         console.log(JSON.stringify(bikedata) + "from hook");
//         console.log(result);

//         console.log(bikedata + "useCreateBike");
//     }


//     return createHandler;
// }