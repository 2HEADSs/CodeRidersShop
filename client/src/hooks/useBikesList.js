import { useEffect, useState } from 'react';
import { getAllBikes, getLastAdded } from '../api/bike-api';


export default function useGetNeededBikes(lastFourAdded) {

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