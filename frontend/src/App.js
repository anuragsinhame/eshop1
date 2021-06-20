import React from "react";
import { Redirect, Route, BrowserRouter } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";

import publicCss from "./public.module.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import CategoryScreen from "./screens/CategoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminHomeScreen from "./admin/screens/AdminHomeScreen";
import HomeScreen from "./screens/HomeScreen";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
// import { SET_NON_ADMIN_PAGE } from "./constants/storeConstants";

function App() {
  const { isAdminPage } = useSelector((state) => state.adminPageStatus);
  // console.log("Admin", isAdminPage);

  // const dispatch = useDispatch();
  // const location = useLocation();

  // const matching = matchPath("admin/", { path: location, exact: false });
  // console.log("matching", matching);

  // console.log("Location", location.pathname);
  // useEffect(() => {
  //   console.log("Is Admin Page", isAdminPage);
  //   // dispatch({ type: SET_NON_ADMIN_PAGE });
  //   console.log("New Admin Page", isAdminPage);
  // }, [dispatch]);

  return (
    <BrowserRouter>
      <div className={publicCss.gridContainer}>
        {!isAdminPage && (
          <>
            <Header />
            <NavBar />
          </>
        )}
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
          <AdminRoute path="/admin" component={AdminHomeScreen}></AdminRoute>
          <Route path="/" component={HomeScreen} exact={true}></Route>
        </main>
        {!isAdminPage && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;
