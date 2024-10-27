import Bikes from "../catalog/BikeList.jsx";

export default function Home() {
    return (
        <>
            <Bikes lastFourAdded={true}></Bikes>
        </>
    );
}