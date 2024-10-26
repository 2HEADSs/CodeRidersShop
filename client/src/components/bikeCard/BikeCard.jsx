import React from 'react';
import styles from './BikeCard.module.css';

function BikeCard({ bike }) {
    return (
        <div className={styles.bikeCard}>
            <img src={bike.img} alt={`${bike.model}`} className={styles.bikeImage} />
            <div className={styles.bikeInfo}>
                <h3>{bike.model}</h3>
                <p><strong>Manufacturer:</strong> {bike.manufacturer}</p>
                <p><strong>Color:</strong> {bike.color}</p>
                <p><strong>Engine Capacity:</strong> {bike.engineCapacity} cc</p>
                <p><strong>Price:</strong> ${bike.price.toLocaleString()}</p>
                <p><strong>Year:</strong> {bike.year}</p>
                <p><strong>Condition:</strong> {bike.used ? "Used" : "New"}</p>
            </div>
        </div>
    );
}

export default BikeCard;
