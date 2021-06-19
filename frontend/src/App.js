import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PublicLayout from "./components/PublicLayout";
import ProtectedLayout from "./components/ProtectedLayout";
import AdminRoute from "./components/AdminRoute";

import { StoreConstants } from "./storeData";
import CategoryScreen from "./screens/CategoryScreen";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PublicLayout}></Route>
        <AdminRoute path="/admin" component={ProtectedLayout}></AdminRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
