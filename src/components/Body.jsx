import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utilities/mockData";
import { useState, useEffect } from "react";
import TopRatedRestaurants from "./TopRatedRestaurants";

// props

function Body() {

  console.log("Body component");

  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants); 

  function searchRestaurants(searchText) {
    // eslint-disable-next-line react/prop-types
    const filterRestaurants = restaurants.filter(res => res.name.toUpperCase().includes(searchText.toUpperCase()));
    setFilteredRestaurants(filterRestaurants);
    console.log(restaurants);
  }

  function filterTopRatedRestaurants() {
    const toprated = restaurants.filter(res => res.avgRating >= 4.5);
    setFilteredRestaurants(toprated);
    console.log(toprated);
}

  useEffect(() => {
    console.log("use effect");
  }, [])

  return (
    <>
    { console.log("rendered")}
      <h1>Restaurants in your area</h1>
      <div className="filterBar">
        <Search searchRestaurants = {searchRestaurants} />
        <TopRatedRestaurants topRatedRestaurants = {filterTopRatedRestaurants}/>
      </div>
     
      <div className="restaurant-container">
        {filteredRestaurants.map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>
    </>
  );
}

export default Body;

// Reconciliation -----   virtual DOM ---- diff algorithm

// Restaurants

