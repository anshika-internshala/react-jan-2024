/* eslint-disable react/prop-types */
function RestaurantCard(props) {
    console.log("props", props.restaurant);

   // Object Destructuring
    const { name, avgRating, deliveryTime, cuisines, location, imageUrl } = props.restaurant;
    return ( 
            <div className="restaurant-card">
                <img src={imageUrl} alt="" width="100%" height="200px" />
                <h2>{name}</h2>
                <h2>{avgRating}</h2>
                <h2>{deliveryTime}</h2>
                <h2>{cuisines}</h2>
                <h2>{location}</h2>
            </div>
    )
}

export default RestaurantCard;