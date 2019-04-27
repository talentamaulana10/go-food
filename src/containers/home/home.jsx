import React, { Component } from "react";
import Header from "../../components/header/header";
import Jumbotron from "../../components/jumbotron/jumbotron";

export default class home extends Component {
  render() {
    return (
      <div>
        <Header name="Go-Food" />
        <Jumbotron
          judul="Go-Resto"
          subjudul="pesan Restorant Dan Makanan Sekarang"
        />
      </div>
    );
  }
}
