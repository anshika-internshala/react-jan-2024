import { useSelector, useDispatch} from "react-redux";
import { removeItem, addItem, clearCart } from "../utilities/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item))
  }

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  }
 
  return (
    <div>
        <button onClick={handleClearCart}>Clear Cart</button>
      {cartItems.map((item) => (
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
              <button
                className="add-button"
                onClick={() => handleRemoveItem(item)}
              >
                 -  
              </button>
              <span>  {item.quantity}  </span>
              <button
                className="add-button"
                onClick={() => handleAddItem(item)}
              >
                 +
              </button>
            </div>
            <img src={item.imageUrl} className="item-image" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
