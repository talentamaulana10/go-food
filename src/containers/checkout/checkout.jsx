import React, { Component } from "react";
import Header from "../../components/header/header";
import BodyCheckout from "../../components/body-checkout";

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <Header name="checkout" />
        <BodyCheckout />
      </div>
    );
  }
}
