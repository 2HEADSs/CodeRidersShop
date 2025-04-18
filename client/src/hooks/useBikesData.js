import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { create, getAllBikes, getLastAdded, getOne, getUserBikes } from '../api/bike-api';


export function useGetNeededBikes(lastFourAdded, userBikes) {
    const [bikes, setBikes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [serverError, setServerError] = useState("");

    useEffect(() => {
        (async () => {
            let result = [];
            try {
                if (lastFourAdded) {
                    result = await getLastAdded();
                } else if (userBikes) {
                    result = await getUserBikes();
                } else {
                    result = await getAllBikes();
                }
            } catch (error) {
                setServerError(error.message)
            }

            setLoading(false)
            setBikes(result);
        })();

    }, [lastFourAdded, userBikes]);

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
            setLoading(false)
        })();

    }, [bikeId])
    return [bike, loading, serverError, setBike];
};

export function useCreateBike() {
    const navigate = useNavigate();

    const [newBike, setNewBike] = useState(null);
    const [serverError, setServerError] = useState('');
    const [loading, setLoading] = useState(false);

    const clearServerError = () => {
        setServerError('')
    };



    const createBike = async (bikeData) => {
        setLoading(true);
        setServerError('');
        try {
            const bikeResult = await create(bikeData);
            navigate(`/bikes/${bikeResult._id}/details`);
        } catch (error) {
            setServerError(error.message);
            setNewBike(null);
        } finally {
            setLoading(false);
        }
    };

    return [newBike, serverError, loading, createBike, clearServerError, setLoading];
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