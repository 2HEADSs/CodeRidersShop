import React from 'react';
import styles from './BikeCard.module.css';
import { Link } from 'react-router-dom';

function BikeCard({ bike }) {
    return (
        <div className={styles.bikeCard}>
            <img src={bike?.img} alt={`${bike.model}`} className={styles.bikeImage} />
            <div className={styles.bikeInfo}>
                <h3>{bike.model}</h3>
                <p><strong>Engine Capacity:</strong> {bike.engineCapacity} cc</p>
                <p><strong>Price:</strong> ${bike.price.toLocaleString()}</p>
                <p><strong>Year:</strong> {bike.year}</p>
                <p><strong></strong> {bike.used == "true" ? 'Used' : 'New'}</p>
                <Link to={`/bikes/${bike._id}/details`} className={styles.bikeLink}>Details</Link>
            </div>
        </div>
    );
}

export default BikeCard;
