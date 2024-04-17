function TopRatedRestaurants (props) {

   function filterRestaurants() {
    // eslint-disable-next-line react/prop-types
    props.topRatedRestaurants();
   }

    return (
        <button onClick={filterRestaurants}>TopRatedRestaurants</button>
    )
}

export default TopRatedRestaurants;