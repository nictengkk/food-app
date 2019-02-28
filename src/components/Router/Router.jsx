import { Route, Switch } from "react-router-dom";
import React from "react";
import AdminPage from "../AdminPage/AdminPage";
import OrderPage from "../OrderPage/OrderPage";
import HomePage from "../HomePage/HomePage";

function Router() {
  return (
    <div>
      <Switch>
        <Route path="/orders" component={OrderPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default Router;
