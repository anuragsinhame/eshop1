import React from "react";
import { BrowserRouter } from "react-router-dom";

import AdminHomeScreen from "../admin/screens/AdminHomeScreen";
import AdminRoute from "./AdminRoute";

export default function ProtectedLayout() {
  console.log("In AdminRoute - ProtectedLayout");
  return (
    <BrowserRouter>
      {/* "?" is added so that id can be empty and user can be redirected to cart component */}
      {/* <div>Hi Admin ProtectedLayout</div> */}
      <Route path="/admin" component={AdminHomeScreen}></Route>
      {/* <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route
            path="/products/:catId/:subCatId?"
            component={CategoryScreen}
          ></Route> */}
    </BrowserRouter>
  );
}
