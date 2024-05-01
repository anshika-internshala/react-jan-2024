import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPercent } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Header() {
    return (
      <>
        <nav>
          <img src="https://i.pinimg.com/736x/d3/36/1d/d3361d62dd2975d50939e8b5c8a18a54.jpg" alt="logo" width="100px" height="100px" />
          <ul>
            <li><FontAwesomeIcon icon={faMagnifyingGlass} />  Search </li>
            <li><FontAwesomeIcon icon={faPercent} /> <Link to="/offers">Offers</Link></li>
            <li><Link to="/help"> Help </Link> </li>
            <li>Login</li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
      </>
    )
}

export default Header;