import { useEffect, useState } from 'react';
import { getAllBikes, getLastAdded, getOne } from '../api/bike-api';


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
