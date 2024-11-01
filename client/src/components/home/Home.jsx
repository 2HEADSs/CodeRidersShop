import BikeList from "../catalog/BikeList.jsx";

export default function Home() {
    return (
        <>
            <BikeList lastFourAdded={true}></BikeList>
        </>
    );
}