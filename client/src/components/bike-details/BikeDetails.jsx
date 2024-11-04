
import styles from './BikeDetails.module.css';
import { useParams } from 'react-router-dom';
import { useGetOneBike } from '../../hooks/useBikesData';

function BikeDetails() {
    const { bikeId } = useParams();
    const [bike, error] = useGetOneBike(bikeId)
    //todo: navigation after create

    return (
        <>
            {error && (<p>{error}</p>)}
            {!bike && (<p>Loading bike details...</p>)}
            {!error &&
            //TODO: add better condition for empty bike array and errors
                (<div className={styles.bikeDetails}>
                    <img src={bike.img} alt={`${bike.model}`} className={styles.bikeImage} />
                    <div className={styles.bikeInfo}>
                        <h2>{bike.model}</h2>
                        <p><strong>Manufacturer:</strong> {bike.manufacturer}</p>
                        <p><strong>Color:</strong> {bike.color}</p>
                        <p><strong>Engine Capacity:</strong> {bike.engineCapacity} cc</p>
                        <p><strong>Price:</strong> ${bike.price?.toLocaleString()}</p>
                        <p><strong>Year:</strong> {bike.year}</p>
                        <p><strong>Condition:</strong> {bike.used == "true" ? 'Used' : 'New'}</p>
                        <p><strong>Description:</strong> {bike.description || "No additional details available."}</p>
                        <p><strong>Contact with owner:</strong> {bike.owner.email}</p>
                        <p><strong>Created:</strong> {formatCreatedAt(bike.createdAt)}</p>
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
