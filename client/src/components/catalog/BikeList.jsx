import React, { useEffect, useState } from 'react';
import styles from './Bikes.module.css';
import BikeCard from '../bike-card/BikeCard.jsx';
import { getAllBikes, getLastAdded } from '../../api/bike-api.js';

// const motorcycleData = [
//     {
//         "model": "GSXR",
//         "manufacturer": "Suzuki",
//         "color": "Red",
//         "engineCapacity": 600,
//         "price": 10000,
//         "year": 2007,
//         "used": true,
//         "img": "https://i0.wp.com/cyclerevive.com/wp-content/uploads/2017/09/dsc_0480.jpg?fit=1170%2C775&ssl=1"
//     },
//     {
//         "model": "Ninja ZX-6R",
//         "manufacturer": "Kawasaki",
//         "color": "Green",
//         "engineCapacity": 636,
//         "price": 12000,
//         "year": 2009,
//         "used": true,
//         "img": "https://i.pinimg.com/originals/89/ea/5b/89ea5bf900f433ff68e26b75ffc84045.jpg"
//     },
//     {
//         "model": "CBR600RR",
//         "manufacturer": "Honda",
//         "color": "Red",
//         "engineCapacity": 599,
//         "price": 11500,
//         "year": 2022,
//         "used": true,
//         "img": "https://motorcycles.honda.bg/wp-content/uploads/sites/4/2023/12/24YM_CBR600RR_Studio_GrandPrixRed_R380_RFQ-CUTTED-e1701856232431-1024x684.png"
//     },
//     {
//         "model": "Shadow Spirit 750",
//         "manufacturer": "Honda",
//         "color": "Black",
//         "engineCapacity": 745,
//         "price": 8500,
//         "year": 2017,
//         "used": true,
//         "img": "https://bike.net/res/media/img/orig/ref/1b2/21061.webp"
//     },
//     {
//         "model": "KX250",
//         "manufacturer": "Kawasaki",
//         "color": "Green",
//         "engineCapacity": 249,
//         "price": 8000,
//         "year": 2023,
//         "used": false,
//         "img": "https://edimotocenter.com/wp-content/uploads/2020/08/unnamed-file.jpg"
//     },
//     {
//         "model": "MT-07",
//         "manufacturer": "Yamaha",
//         "color": "Blue",
//         "engineCapacity": 689,
//         "price": 7500,
//         "year": 2022,
//         "used": true,
//         "img": "https://www.dianamoto.com/wp-content/uploads/2024/02/Yamaha20MT0720ABS20Icon20Blue202024.jpg"
//     },
//     {
//         "model": "Ninja H2",
//         "manufacturer": "Kawasaki",
//         "color": "Silver",
//         "engineCapacity": 998,
//         "price": 30000,
//         "year": 2023,
//         "used": false,
//         "img": "https://www.roadracingworld.com/wp-content/uploads/rrw/f0146965-e514-4c72-9034-3c376fce9813.jpg"
//     },
//     {
//         "model": "V-Strom 650",
//         "manufacturer": "Suzuki",
//         "color": "Yellow",
//         "engineCapacity": 645,
//         "price": 10000,
//         "year": 2023,
//         "used": false,
//         "img": "https://bikes.b-cdn.net/fp/36456/suzuki-v-strom-650xt-am2-2022-model-2022-yellow_553515.jpg"
//     },
//     {
//         "model": "GSX-R1000",
//         "manufacturer": "Suzuki",
//         "color": "Blue",
//         "engineCapacity": 999,
//         "price": 18000,
//         "year": 2021,
//         "used": true,
//         "img": "https://suzukicycles.com/-/media/project/cycles/images/products/motorcycles/gsx-r1000rz_100th-anniversary-edition/2021/promos/gsx-r1000rzm1_d_web.jpg?mw=1920&w=1920&hash=F1FE4D700E37603F89647624263D99F7"
//     },
//     {
//         "model": "SV650",
//         "manufacturer": "Suzuki",
//         "color": "Black",
//         "engineCapacity": 645,
//         "price": 7800,
//         "year": 2022,
//         "used": true,
//         "img": "https://suzuki.bg/data/colors/motorcycles/15/37.jpg"
//     },
//     {
//         "model": "Shadow Spirit 750",
//         "manufacturer": "Honda",
//         "color": "Black",
//         "engineCapacity": 745,
//         "price": 8500,
//         "year": 2021,
//         "used": true,
//         "img": "https://bike.net/res/media/img/orig/ref/1b2/21061.jpg"
//     },
//     {
//     "model": "Gold Wing",
//     "manufacturer": "Honda",
//     "color": "Military Green",
//     "engineCapacity": 1833,
//     "price": 23000,
//     "year": 2023,
//     "used": false,
//     "img": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/158873/goldwing-tour-right-front-three-quarter.gif?isig=0"
// },
//     {
//         "model": "Dragstar 650",
//         "manufacturer": "Yamaha",
//         "color": "Black",
//         "engineCapacity": 649,
//         "price": 8500,
//         "year": 2022,
//         "used": true,
//         "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PjhYXfvCk0gzTZf1GKJz3NJVrAoUc1-d0Q&s"
//     }
//     // Add additional motorcycle objects here
// ];

function BikeList({ lastFourAdded }) {

    // const [bikes, setBikes] = useState(motorcycleData);
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

    return (
        <div className={styles.catalogContainer}>
            {/* TODO: change style of h2 and h3 */}
            {lastFourAdded
                ? <h2 className={styles.catalogTitle}>Last added motorcyles</h2>
                : <h2 className={styles.catalogTitle}>Motorcycle Catalog</h2>
            }
            {/* TODO: add propper loading component */}
            {loading && <h1>Loading....</h1>}
            {bikes.length > 0
                ? <div className={styles.catalogFlex}>
                    {bikes.map((bike) => (
                        <BikeCard key={bike._id} bike={bike} />
                    ))}
                </div>
                : <h3>No motorcyles yet!</h3>
            }

        </div>
    );
}

export default BikeList;
