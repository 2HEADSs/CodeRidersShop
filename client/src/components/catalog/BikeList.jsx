import styles from './Bikes.module.css';
import BikeCard from '../bike-card/BikeCard.jsx';
import { useGetNeededBikes } from '../../hooks/useBikesData.js';


export default function BikeList({ lastFourAdded, useBikes }) {

    const [bikes, loading, serverError] = useGetNeededBikes(lastFourAdded, useBikes);



    return (
        <div className={styles.catalogContainer}>
            {/* TODO: change style of h2 and h3 */}
            {lastFourAdded &&
                <h2 className={styles.catalogTitle}>Last added motorcyles</h2>
            }
            {useBikes &&
                <h2 className={styles.catalogTitle}>My Motorcycles</h2>
            }
            {
                (!lastFourAdded && !useBikes) &&
                <h2 className={styles.catalogTitle}>Motorcycle Catalog</h2>
            }

            {/* TODO: add propper loading component */}
            {loading && <h1>Loading....</h1>}
            {bikes.length > 0 && !serverError
                ? <div className={styles.catalogFlex}>
                    {bikes.map((bike) => (
                        <BikeCard key={bike._id} bike={bike} />
                    ))}
                </div>
                : <h3>No motorcyles yet!</h3>
            }
            {serverError &&
                <p className={styles.errorMessage}>{serverError}</p>}
        </div>
    );
}
