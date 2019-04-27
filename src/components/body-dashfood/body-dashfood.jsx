import React, { Component } from "react";
import Card from "../card/card";
import { Row, Button, Col, Jumbotron, Table, Container } from "reactstrap";
import CardCounter from "../cardCounter/cardCounter";

export default class Bodydashfood extends Component {
  state = {
    makanan: [
      {
        id: 1,
        nama: "hamburger",
        price: 19000,
        gambar:
          "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg"
      },
      {
        id: 2,
        nama: "kebab",
        price: 10000,
        gambar:
          "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/5451_foto-dafafoodindocom.jpg"
      },
      {
        id: 3,
        nama: "chicken",
        price: 13000,
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uYbb7UPhn2AYhBU7jzkNHweyL6dWAX1EGAslZWX_uulIbIRGOQ"
      },
      {
        id: 4,
        nama: "kentang goreng",
        price: 20000,
        gambar:
          "https://cdn0-production-images-kly.akamaized.net/oIN3wVed8tEnm39rmcJtHo7D0eA=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/970871/original/021248500_1440846143-header_chiantilvpa_com.jpg"
      }
    ],
    orderan: [],
    total: 0,
    resto: [],
    qty: 0
  };

  choice = id => {
    // var data = this.state.makanan;
    // var orderku = data.find(item => item.id === id);
    // sessionStorage.setItem("data", JSON.stringify([orderku]));
    // var orderan = [];
    // orderan.push(orderku);
    // console.log(orderan);
    var food = this.state.makanan;
    var order = food.find(item => item.id === id);

    this.setState({
      orderan: [...this.state.orderan, order]
    });
  };
  componentDidMount() {
    var data = this.state.resto;
    var getResto = sessionStorage.getItem("resto");
    const jadiResto = JSON.parse(getResto);
    this.setState({
      resto: jadiResto
    });
  }

  tambahTotalHarga = harga => {
    this.setState({
      total: this.state.total + harga
    });
    this.setState({
      qty: this.state.qty + 1
    });
  };
  kurangTotalHarga = harga => {
    this.setState({
      total: this.state.total - harga
    });
    this.setState({
      qty: this.state.qty - 1
    });
  };
  bayar = () => {
    alert("Terima Kasih");
  };

  render() {
    return (
      <div>
        <Row>
          {this.state.makanan.map((item, index) => (
            <Col xs="3">
              <Card
                choice={() => this.choice(item.id)}
                nama={item.nama}
                harga={item.price}
                tambahTotalHarga={this.tambahTotalHarga}
                gambar={item.gambar}
              />
            </Col>
          ))}
        </Row>

        <Jumbotron style={{ marginTop: "10px" }} fluid>
          <Container fluid>
            <h5 style={{ fontWeight: "bold" }}>Detail Order</h5>
            <Table>
              <thead>
                <tr>
                  <th>Restorant</th>
                  <th>Lokasi</th>
                  <th>Makanan Pesanan</th>
                  <th>Quantity</th>
                  <th>Yang harus kamu bayar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {this.state.resto.map(key => (
                    <td>{key.nama}</td>
                  ))}
                  {this.state.resto.map(key => (
                    <td>{key.lokasi}</td>
                  ))}
                  <td>
                    <div
                      style={{
                        display: "flex"
                      }}
                    >
                      kamu pesan :{" "}
                      {this.state.orderan.map(key => (
                        <p style={{ fontWeight: "bold" }}>{key.nama}</p>
                      ))}
                    </div>
                  </td>
                  <td>{this.state.qty} X</td>
                  <td>
                    Rp : {this.state.total}{" "}
                    <Button onClick={this.bayar}>Bayar Sekarang</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            {this.state.orderan.map(key => (
              <CardCounter
                gambar={key.gambar}
                name={key.nama}
                harga={key.price}
                kurangTotalHarga={this.kurangTotalHarga}
                tambahTotalHarga={this.tambahTotalHarga}
              />
            ))}
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
