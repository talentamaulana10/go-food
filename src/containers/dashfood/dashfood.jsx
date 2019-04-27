import React, { Component } from "react";
import Header from "../../components/header/header";
import Bodydashfood from "../../components/body-dashfood/body-dashfood";

export default class Dashfood extends Component {
  render() {
    return (
      <div>
        <Header name="dashboard food" />
        <Bodydashfood />
      </div>
    );
  }
}
