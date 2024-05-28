import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import Login from "./Login";
import { useState , useContext} from "react";
import { useSelector } from "react-redux";
import userContext from "../utilities/userContext";

function Header() {
  const [visible, setVisible] = useState(false);
  const [isLogin, setIsLoggedIn] = useState(false);

  const onlineStatus = useOnlineStatus();

  const { currentUser } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const logOut = () => {
    sessionStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  }

  return (
    <>
      <nav>
        <img
          src="https://i.pinimg.com/736x/d3/36/1d/d3361d62dd2975d50939e8b5c8a18a54.jpg"
          alt="logo"
          width="100px"
          height="100px"
        />
        <ul>
          <li>
            <span>{currentUser}</span>
          </li>
          <li>
            <span>Online Status: {onlineStatus ? "🟢" : "🔴"}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Search{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faPercent} />{" "}
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/help"> Help </Link>{" "}
          </li>
          <li>
            {isLogin ? (
              <button 
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={logOut}
                >
                LogOut
              </button>
            ) : (
              <button
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={openModal}
              >
                Login
              </button>
            )}
          </li>

          <li>
            <Link to="/cart">Cart- {cartItems.length} items</Link>
          </li>
        </ul>
      </nav>
      <Login 
        isVisible={visible} 
        onClose={closeModal}
        setLoggedIn={setIsLoggedIn}>
      </Login>
    </>
  );
}

export default Header;
