import { useParams } from "react-router-dom";

const RestaurantDetails = () => {

    const {id} = useParams();

    return (
        <>
            <h1>Restaurant Details</h1>
            <h2>Restaurant Id: {id} </h2>
        </>
    )
}

export default RestaurantDetails;