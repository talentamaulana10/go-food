import React, { Component } from "react";
import { Jumbotron, Container, Table } from "reactstrap";
import CardCounter from "../cardCounter";
import { identifier } from "@babel/types";

export default class BodyCheckout extends Component {
  componentDidMount() {
    const data = sessionStorage.getItem("data");
    const getResto = sessionStorage.getItem("resto");
    const jadi = JSON.parse(data);
    const jadiResto = JSON.parse(getResto);
    console.log(jadiResto);
    console.log(jadi);
    this.setState({
      makanan: jadi,
      resto: jadiResto
    });
  }

  state = {
    makanan: [],
    resto: [],
    total: 0,
    qty: 0
  };

  tambahTotalHarga = harga => {
    this.setState({
      total: this.state.total + harga
    });
    this.setState({
      qty: this.state.qty + 1
    });
  };

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <Table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Restorant</th>
                  <th>Nama Pesanan</th>
                  <th>Quantity</th>
                  <th>Total Harga</th>
                </tr>
              </thead>
              <tbody>
                {this.state.resto.map(item => {
                  return (
                    <tr>
                      <th>1</th>
                      <th>{item.nama}</th>
                      <th>{this.state.makanan[0].nama}</th>
                      <th>{this.state.qty}</th>
                      <th>{this.state.total}</th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            {this.state.makanan.map(item => {
              return (
                <CardCounter
                  gambar={item.gambar}
                  name={item.nama}
                  harga={item.price}
                  tambahTotalHarga={this.tambahTotalHarga}
                />
              );
            })}
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
