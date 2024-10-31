
import { useEffect, useState } from 'react';
import styles from './BikeDetails.module.css';
import { getOne } from '../../api/bike-api';
import { useParams } from 'react-router-dom';

function BikeDetails() {
    const [bike, setBike] = useState({});
    const { bikeId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await getOne(bikeId);
            setBike(result)
        })()
    }, [])

    return (
        <div className={styles.bikeDetails}>
            <img src={bike.img} alt={`${bike.model}`} className={styles.bikeImage} />
            <div className={styles.bikeInfo}>
                <h2>{bike.model}</h2>
                <p><strong>Manufacturer:</strong> {bike.manufacturer}</p>
                <p><strong>Color:</strong> {bike.color}</p>
                <p><strong>Engine Capacity:</strong> {bike.engineCapacity} cc</p>
                <p><strong>Price:</strong> ${bike.price?.toLocaleString()}</p>
                <p><strong>Year:</strong> {bike.year}</p>
                <p><strong>Condition:</strong> {bike.used ? 'Used' : 'New'}</p>
                <p><strong>Description:</strong> {bike.description || "No additional details available."}</p>
                <p><strong>Contacts:</strong> {bike.owner.email}</p>

            </div>
        </div>
    );
}

export default BikeDetails;
