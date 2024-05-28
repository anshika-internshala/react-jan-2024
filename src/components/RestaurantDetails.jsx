//import { useParams } from "react-router-dom";
import { addItem } from "../utilities/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetails = () => {
  //const {id} = useParams();

  const items = [
    {
      id: 1,
      name: "Melts 3 Course Meal for 1 - Veg",
      price: 350,
      description:
        "Serves 1 | The perfect Me Time meal. Choose your favourite Melts & Fries accompanied with 1 Pepsi PET. Cheezy Cheese Veg Melts : (296 Kcal/100g), Loaded BBQ Veg Melts : (255 Kcal/100g), Makhni Paneer Melts : (265 Kcal/100g).",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/3330ac68-19aa-4598-a9f9-ac1f538ab52c_e1e7be34-7ff1-475b-a69b-4b99de6a2b09.png",
    },
    {
      id: 2,
      name: "Create your Melts Box of 2 - Veg",
      price: 379,
      description:
        "Serves 2 | Choose any 2 Melts. Double the flavour, double the satisfaction. Cheezy Cheese Veg Melts : (296 Kcal/100g), Loaded BBQ Veg Melts : (255 Kcal/100g), Makhni Paneer Melts : (265 Kcal/100g).",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/e6072e97754de0c6c6030103e0fb50d3",
    },
    {
      id: 3,
      name: "Cheezy Cheese Veg & Loaded BBQ Veg Combo",
      price: 350,
      description:
        "Serves 1 | The perfect Me Time meal. Choose your favourite Melts & Fries accompanied with 1 Pepsi PET. Cheezy Cheese Veg Melts : (296 Kcal/100g), Loaded BBQ Veg Melts : (255 Kcal/100g), Makhni Paneer Melts : (265 Kcal/100g).",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/e6072e97754de0c6c6030103e0fb50d3",
    },
    {
      id: 4,
      name: "Melts 3 Course Meal for 1 - Veg",
      price: 399,
      description:
        "Serves 2 | Double the satisfaction with Cheezy Cheese Veg & Loaded BBQ Veg Melts. Cheezy Cheese Veg Melts : (296 Kcal/100g), Loaded BBQ Veg Melts : (255 Kcal/100g)",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/e6072e97754de0c6c6030103e0fb50d3",
    },
  ];

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.name}</span>
              <span>
                - ₹{item.price ? item.price / 100 : item.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.description}</p>
          </div>
          <div className="item-list-item">
            <div className="absolute">
              <button className="add-button" onClick={() => handleAddItem(item)}>
                Add +
              </button>
            </div>
            <img src={item.imageUrl} className="item-image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantDetails;
