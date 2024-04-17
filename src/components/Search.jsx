import { useState } from "react";

function Search(props) {

    const [searchText , setSearchText] = useState("");

    function searchRestaurant() {
        // eslint-disable-next-line react/prop-types
        props.searchRestaurants(searchText);
    }

  return (
    <div className="search-bar">
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <button onClick={searchRestaurant}>Search</button>
    </div>
  );
}

export default Search;
