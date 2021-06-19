import React, { useEffect } from "react";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import adminCss from "../admin.module.css";

import { signout } from "../../actions/userActions";
import StoreDetailsScreen from "./StoreDetailsScreen";
import ManageProdsDataScreen from "./ManageProdsDataScreen";
import ManageUsersScreen from "./ManageUsersScreen";
import ManageOrdersScreen from "./ManageOrdersScreen";
import SalesDataScreen from "./SalesDataScreen";
import { SET_ADMIN_PAGE } from "../../constants/storeConstants";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import ProductCard from "../components/ProductCard";
// import LoadingBox from "../components/LoadingBox";
// import MessageBox from "../components/MessageBox";
// import { listProducts } from "../actions/productActions";
// import data from "../data";  //local import commented

// import { StoreConstants } from "../storeData";

export default function AdminHomeScreen() {
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("In Admin Home");
    dispatch({ type: SET_ADMIN_PAGE });
  }, [dispatch]);

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className={adminCss.gridContainer}>
        <nav className={adminCss.sideNavbar}>
          <div className={adminCss.component}>
            <Link to="/admin/StoreDetails">
              <div className={adminCss.componentImage}>
                <i className="fas.fa-store"></i>
              </div>
              <div className={adminCss.componentText}>Store Details</div>
            </Link>
          </div>
          <div className={adminCss.component}>
            <Link to="/admin/ManageProdsData">
              <div className={adminCss.componentImage}>
                <img src="./assets/store-icon.svg" alt="Products" />
              </div>
              <div className={adminCss.componentText}>Manage Products</div>
            </Link>
          </div>
          <div className={adminCss.component}>
            <Link to="/admin/ManageUsers">
              <div className={adminCss.componentImage}>
                <img src="./assets/store-icon.svg" alt="Users" />
              </div>
              <div className={adminCss.componentText}>Manage Users</div>
            </Link>
          </div>
          <div className={adminCss.component}>
            <Link to="/admin/ManageOrders">
              <div className={adminCss.componentImage}>
                <img src="./assets/store-icon.svg" alt="Orders" />
              </div>
              <div className={adminCss.componentText}>Manage Orders</div>
            </Link>
          </div>
          <div className={adminCss.component}>
            <Link to="/admin/SalesData">
              <div className={adminCss.componentImage}>
                <img src="./assets/store-icon.svg" alt="Sales" />
              </div>
              <div className={adminCss.componentText}>Sales Data</div>
            </Link>
          </div>
          <Link to="#signout" onClick={signoutHandler}>
            Sign Out
          </Link>
        </nav>
        <main className={adminCss.mainDiv}>
          <Switch>
            <Route
              path="/admin/StoreDetails"
              component={StoreDetailsScreen}
            ></Route>
            <Route
              path="/admin/ManageProdsData"
              render={(props) => (
                <ManageProdsDataScreen DefaultModule="subCat11"></ManageProdsDataScreen>
              )}
              // component={ManageProdsDataScreen}
              // props={DefaultModule}
            ></Route>
            <Route
              path="/admin/ManageUsers"
              component={ManageUsersScreen}
            ></Route>
            <Route
              path="/admin/ManageOrders"
              component={ManageOrdersScreen}
            ></Route>
            <Route path="/admin/SalesData" component={SalesDataScreen}></Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
