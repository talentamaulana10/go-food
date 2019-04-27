import React, { Component } from "react";
import Header from "../../components/header/header";
import BodyResto from "../../components/body-restaurant";

export default class DashResto extends Component {
  render() {
    return (
      <div>
        <Header name="dashboard resto" />
        <BodyResto />
      </div>
    );
  }
}
