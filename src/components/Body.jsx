import Search from "./Search";
import RestaurantCard from "./RestaurantCard";

// props

const restaurants = [
  {
    id: 1,
    name: "PizzaHut",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    avgRating: "4.2",
    deliveryTime: "30-35mins",
    cuisines: "Pizza",
    location: "rajnagar",
  },
  {
    id: 2,
    name: "Mc.Donald's",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/535fc9f9c135f7982317bbb6a64a1ffc",
    avgRating: "4.5",
    deliveryTime: "25-30mins",
    cuisines: "Burger",
    location: "rajnagar",
  },
];

function Body() {
  return (
    <>
      <h1>Restaurants in your area</h1>
      <Search />
      <div className="restaurant-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>
    </>
  );
}

export default Body;

// Reconciliation -----   virtual DOM ---- diff algorithm

// Restaurants

