import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
    logOut,
    selectCurrentIsAdmin,
    selectCurrentToken,
    selectCurrentUsername,
} from "../../features/user/userSlice";
import { emptyCart, selectCartTotalItems } from "../../features/cart/cartSlice";
const Navbar = () => {
    const name = useSelector(selectCurrentUsername);
    const isAdmin = useSelector(selectCurrentIsAdmin);
    const token = useSelector(selectCurrentToken);
    const cartTotalItems = useSelector(selectCartTotalItems);
    const dispatch = useDispatch();

    const handleLogut = () => {
        dispatch(logOut());
        dispatch(emptyCart());
    };

    return (
        <div className="custom-navbar">
            <div className="custom-container">
                <div className="left">
                    <div className="custom-logo">
                        <Link to="/">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Half-Life_lambda_logo.svg/365px-Half-Life_lambda_logo.svg.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <ul className="nav">
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/store">STORE</Link>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <div className="profile-container">
                        {token ? (
                            <div className="user-profile">
                                <span className="profile-navbar-username">
                                    {name}
                                </span>
                                <div className="user-profile-dropdown">
                                    <Link to="/user-settings">settings</Link>
                                    {isAdmin === 0 ? (
                                        <Link to="/user-orders">orders</Link>
                                    ) : (
                                        <Link to="/admin-orders">
                                            users orders
                                        </Link>
                                    )}
                                    <button
                                        className="logout-button"
                                        onClick={handleLogut}
                                    >
                                        logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="login-navbar-container">
                                <Link className="login-button" to="login">
                                    login
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="cart">
                        <Link to="/cart">
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                size="2x"
                                className="cart-logo"
                            />
                        </Link>
                        {cartTotalItems > 0 ? (
                            <p className="cart-total-items">{cartTotalItems}</p>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
