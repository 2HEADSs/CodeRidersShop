import Bikes from "../catalog/Bikes.jsx";

export default function Home() {
    return (
        <>
            <Bikes lastFourAdded={true}></Bikes>
        </>
    );
}