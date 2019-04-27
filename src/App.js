import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home/home";
import Dashfood from "./containers/dashfood";
import DashResto from "./containers/dashResto/dashResto";
import Checkout from "./containers/checkout/checkout";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashfood" component={Dashfood} />
        <Route path="/dashresto" component={DashResto} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
