import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

import publicCss from "../public.module.css";
import { signout } from "../actions/userActions";
import CartScreen from "../screens/CartScreen";
// import { Route } from "react-router-dom/cjs/react-router-dom.min";
import HomeScreen from "../screens/HomeScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import OrderScreen from "../screens/OrderScreen";
import PaymentMethodScreen from "../screens/PaymentMethodScreen";
import PlaceOrderScreen from "../screens/PlaceOrderScreen";
import ProductScreen from "../screens/ProductScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ShippingAddressScreen from "../screens/ShippingAddressScreen";
import SigninScreen from "../screens/SigninScreen";

import NavBar from "./NavBar";
import PrivateRoute from "./PrivateRoute";

import { StoreConstants } from "../storeData";
import CategoryScreen from "../screens/CategoryScreen";

export default function PublicLayout() {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className={publicCss.gridContainer}>
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
              <a href="/admin">Admin Dashboard</a>
            )}
          </div>
        </header>
        {/* Adding Navigation Bar */}
        <NavBar />
        <main>
          {/* "?" is added so that id can be empty and user can be redirected to cart component */}
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route
            path="/products/:catId/:subCatId?"
            component={CategoryScreen}
          ></Route>
          <Route path="/products" exact={true}>
            <Redirect to="/"></Redirect>
          </Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <Route path="/" component={HomeScreen} exact={true}></Route>
        </main>
        <footer className="row center">All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}
