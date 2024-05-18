/* eslint-disable react/prop-types */
function RestaurantCard(props) {
    console.log("props", props.restaurant);

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
            </div>
    )
}

export default RestaurantCard;