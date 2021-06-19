import React from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

import { signout } from "./actions/userActions";
import CartScreen from "./screens/CartScreen";
// import { Route } from "react-router-dom/cjs/react-router-dom.min";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";

import NavBar from "./components/NavBar";

import PrivateRoute from "./components/PrivateRoute";
=======
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PublicLayout from "./components/PublicLayout";
import ProtectedLayout from "./components/ProtectedLayout";
import AdminRoute from "./components/AdminRoute";
>>>>>>> a8a068809179321f989551c6dbdef68b17559fa9

import { StoreConstants } from "./storeData";
import CategoryScreen from "./screens/CategoryScreen";

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              {StoreConstants.shopName}
            </Link>
          </div>
          <div></div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
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
              <div className="dropdown">
                <Link to="#admin" onClick={signoutHandler}>
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
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
        <footer className="row center">All Rights Reserved - &copy;Anurag Sinha</footer>
      </div>
=======
      <Switch>
        <AdminRoute path="/admin" component={ProtectedLayout}></AdminRoute>
        <Route path="/" component={PublicLayout}></Route>
      </Switch>
>>>>>>> a8a068809179321f989551c6dbdef68b17559fa9
    </BrowserRouter>
  );
}

export default App;
