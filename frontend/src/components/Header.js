import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";

import publicCss from "../public.module.css";
import { StoreData } from "../actions/storeActions";

// import { StoreConstants } from "../storeData";

export default function Header() {
  const StoreConstants = useSelector((state) => state.storeData);
  const { StoreName } = StoreConstants;
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  useEffect(() => {
    dispatch(StoreData());
    // const fetchData = async () => {
    //   // http://localhost:4200/api/store/all
    //   const dbStoreData = await axios.get(`${API_URL}/api/store/all`);
    //   console.log("stData", dbStoreData.data);
    //   console.log("stDataRes", dbStoreData.data.response);
    //   setStoreConstants(dbStoreData.data.response);
    //   const dbStoreName = dbStoreData.data.response.filter(
    //     (storeProperty) => storeProperty.property === "StoreName"
    //   )[0].value;
    //   setStoreName(dbStoreName);
    // };
    // fetchData();
  }, [dispatch]);

  return (
    <header className={`${publicCss.header} row`}>
      <div>
        <Link className={publicCss.brand} to="/">
          {StoreName}
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
