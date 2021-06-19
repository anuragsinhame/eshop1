import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";

import publicCss from "../public.module.css";
import { StoreConstants } from "../storeData";

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <header className={`${publicCss.header} row`}>
      <div>
        <Link className={publicCss.brand} to="/">
          {StoreConstants.shopName}
        </Link>
      </div>
      <div></div>
      <div>
        <Link to="/cart">
          Cart
          {cartItems.length > 0 && (
            <span className={publicCss.badge}>{cartItems.length}</span>
          )}
        </Link>
        {userInfo ? (
          <div className={publicCss.dropdown}>
            <Link to="#">
              {userInfo.name} <i className="fa fa-caret-down"></i>
            </Link>
            <ul className={publicCss.dropdownContent}>
              <li>
                <Link to="/profile">User Profile</Link>
              </li>
              <li>
                <Link to="/orderhistory">Order History</Link>
              </li>
              <li>
                {" "}
                <Link to="#signout" onClick={signoutHandler}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
        {userInfo && userInfo.isAdmin && (
          <Link to="/admin">Admin Dashboard</Link>
        )}
      </div>
    </header>
  );
}
