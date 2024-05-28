import userContext from "../utilities/userContext";
import { useContext } from "react";

/* eslint-disable react/prop-types */
function RestaurantCard(props) {
    console.log("props", props.restaurant);

    const { currentUser } = useContext(userContext);

   // Object Destructuring
    const { name, avgRating, deliveryTime, cuisines, location, imageUrl } = props.restaurant;
    return ( 
            <div className="restaurant-card">
                <img src={imageUrl} alt="" width="200px" height="150px" />
                <h2>{name}</h2>
                <span>{avgRating}</span>
                <span>{deliveryTime}</span>
                <span>{cuisines}</span>
                <span>{location}</span>
                <span>{currentUser}</span>
            </div>
    )
}

export default RestaurantCard;