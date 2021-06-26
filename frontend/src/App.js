import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import AdminRoute from "./components/AdminRoute";
import PublicLayout from "./components/PublicLayout";
import ProtectedLayout from "./components/ProtectedLayout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AdminRoute path="/admin" component={ProtectedLayout}></AdminRoute>
        <Route path="/" component={PublicLayout}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
