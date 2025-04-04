import React from 'react';
import styles from './BikeCard.module.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

function BikeCard({ bike }) {
    const { userId, ...data } = useAuthContext();
    // console.log(userId);
    // console.log(bike.owner);

    // const addToWishListHandler = async () => {
    //     setloadingWishList(true);
    //     try {
    //         await addToWishList(bikeId);
    //         //TODO: wishlist- change button to icon?
    //     } catch (error) {
    //         console.log(error);

    //     }
    // };

    return (
        <div className={styles.bikeCard}>
            <img src={bike?.img} alt={`${bike.model}`} className={styles.bikeImage} />
            <div className={styles.bikeInfo}>
                <h3>{bike.model}</h3>
                <p><strong>Engine Capacity:</strong> {bike.engineCapacity} cc</p>
                <p><strong>Price:</strong> ${bike.price.toLocaleString()}</p>
                <p><strong>Year:</strong> {bike.year}</p>
                <p><strong></strong> {bike.used == true ? 'Used' : 'New'}</p>
                <div className={styles.bikeLinksButtons}>
                    <Link to={`/bikes/${bike._id}/details`} className={styles.bikeLink}>Details</Link>
                    {(userId == bike.owner) && <Link to={`/bikes/${bike._id}/edit`} className={styles.bikeLink}>Edit</Link>}
                    {/* {((userId) && (userId !== bike.owner)) && <Link to={'#'} onClick={addToWishListHandler} className={styles.bikeLink}>Add to favorites</Link>} */}
                </div>
            </div>
        </div>
    );
}

export default BikeCard;
