import { useEffect, useState } from 'react';
import { create, edit, getAllBikes, getLastAdded, getOne } from '../api/bike-api';


export function useGetNeededBikes(lastFourAdded) {
    const [bikes, setBikes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [serverError, setServerError] = useState("");


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
    const [bike, setBike] = useState({});
    const [loading, setLoading] = useState(true);
    const [serverError, setServerError] = useState('');


    useEffect(() => {
        (async () => {
            let result = [];
            try {
                result = await getOne(bikeId);
                if (result !== null) {
                    setBike(result);
                    setServerError('');
                } else {
                    setServerError('Bike do not exist.');
                    setBike([])
                }
            } catch (error) {
                setServerError(error)
            }
            setLoading(false);


        })()
    }, [bikeId])
    return [bike, loading, serverError,];
};

export function useCreateBike() {
    const [newBike, setNewBike] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const createBike = async (bikeData) => {
        setLoading(true);
        setError(null);
        try {
            const bikeResult = await create(bikeData);
            setNewBike(bikeResult);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { newBike, error, loading, createBike };
}


export function useEditBike() {
    const [editedBike, setEditedBike] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const editBike = async (bikeData) => {
        setLoading(true);
        setError(null);
        try {
            const bike = await edit(bikeData);
            setEditedBike(bike);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }

    };

    return { editedBike, error, loading, editBike }
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