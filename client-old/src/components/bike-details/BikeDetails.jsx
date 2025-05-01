
import styles from './BikeDetails.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetOneBike } from '../../hooks/useBikesData';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { addToWishList, remove } from '../../api/bike-api';
import { useEffect, useState } from 'react';

function BikeDetails() {
    const navigate = useNavigate();

    const { bikeId } = useParams();
    const [bike, loading, error] = useGetOneBike(bikeId);
    const { userId, ...data } = useAuthContext();
    const [bikeLikesList, setbikeLikesList] = useState(bike.likes);
    const [loadingWishList, setloadingWishList] = useState(false);
    console.log(bikeLikesList);
    useEffect(() => {
        if (bike?.likes) {
            setbikeLikesList(bike.likes);
        }
    }, [bike]);



    const bikeDeleteHandler = async () => {

        const isConfirm = confirm(`Are you sure you want to delete ${bike.model} bike?`);
        if (!isConfirm) {
            return
        }
        try {
            await remove(bikeId);
            navigate(`/`);
        } catch (error) {
            console.log(error);

        }
    };

    const addToWishListHandler = async () => {
        setloadingWishList(true);
        try {
            const result = await addToWishList(bikeId);
            setbikeLikesList(result);
            //TODO: wishlist- change button to icon?
        } catch (error) {
            console.log(error);

        }
    };

    return (
        <>
            {loading && (<p>Loading bike details...</p>)}
            {error && (<p>{error.message}</p>)}
            {(!error && Object.entries(bike).length > 0) &&
                //TODO: add better condition for empty bike array and errors
                (<div className={styles.bikeDetails}>
                    <img src={bike.img} alt={`${bike.model}`} className={styles.bikeImage} />
                    <div className={styles.bikeInfo}>
                        <h2>Model: {bike?.model}</h2>
                        <p><strong>Manufacturer:</strong> {bike.manufacturer}</p>
                        <p><strong>Color:</strong> {bike.color}</p>
                        <p><strong>Engine Capacity:</strong> {bike.engineCapacity} cc</p>
                        <p><strong>Price:</strong> ${bike.price?.toLocaleString()}</p>
                        <p><strong>Year:</strong> {bike.year}</p>
                        <p><strong>Condition:</strong> {bike.used == true ? 'Used' : 'New'}</p>
                        <p><strong>Description:</strong> {bike.description || "No additional details available."}</p>
                        <p><strong>Contact with owner:</strong> {data.userEmail}</p>
                        <p><strong>Created:</strong> {formatCreatedAt(bike.createdAt)}</p>
                        {(bike.owner == userId) &&
                            <>
                                <Link to={`/bikes/${bike._id}/edit`} className={styles.bikeLink}>Edit</Link>
                                <Link to={'#'} onClick={bikeDeleteHandler} className={styles.bikeLink}>Delete</Link>
                            </>
                        }
                        {loadingWishList &&
                            <p>Loading wishlist...</p>
                        }
                        {((userId && bike.owner != userId) &&
                            (bikeLikesList?.some(x => x === userId)))
                            ? <Link to={'#'} onClick={addToWishListHandler} className={styles.bikeLink}>Remove from favorites</Link>
                            : <Link to={'#'} onClick={addToWishListHandler} className={styles.bikeLink}>Add to favorites</Link>

                        }













                        {/* {userId &&
                            <div className={styles.bikeLinksButtons}>
                                {bike?.owner == userId
                                    ?
                                    <>
                                        <Link to={`/bikes/${bike._id}/edit`} className={styles.bikeLink}>Edit</Link>
                                        <Link to={'#'} onClick={bikeDeleteHandler} className={styles.bikeLink}>Delete</Link>
                                    </>
                                    :
                                    <>
                                        {loadingWishList
                                            //TODO: Add propper loading element
                                            ? <p>Loading wishlist...</p>
                                            //TODO: Change link to button
                                            : <Link to={'#'} onClick={addToWishListHandler} className={styles.bikeLink}>Add to favorites</Link>

                                        }

                                    </>
                                }
                            </div>
                        } */}
                    </div>
                </div>)
            }
        </>
    );

}

function formatCreatedAt(dateString) {
    return new Date(dateString).toLocaleString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}

export default BikeDetails;
