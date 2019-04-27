import React, { Component } from "react";
import Card from "../cardRestaurant";
import { Row, Col } from "reactstrap";

export default class BodyRestaurant extends Component {
  state = {
    resto: [
      {
        id: 1,
        nama: "Pizza Hut Bekasi",
        lokasi: "Jl. Boulevard Raya,Bekasi Jawa Barat 17143",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxr_4mQt8mb-FN5kSy3OxFT3paOhABxzLJl7x3t1Sgfb4heYgh"
      },
      {
        id: 2,
        nama: "mCDonald Semarang",
        lokasi: "Ngaliyan Semarang, Jl Silayur",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTAWClVKntzk4tzgn7cW6-vyJdpYcla4FZ5cWwvyO9Uzfl6sK"
      },
      {
        id: 3,
        nama: "KFC BSB Semarang",
        lokasi: "jl Bsb City Semarang Barat",
        gambar:
          "https://o.aolcdn.com/images/dims3/GLOB/crop/5337x2674+0+490/resize/630x315!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F414b8faf059c2106a7adeb62058ad47f%2F206140802%2Fclosed-sign-on-the-door-of-a-kfc-restaurant-in-clapham-south-london-picture-id920567474"
      },
      {
        id: 4,
        nama: "Burger King Bandung",
        lokasi: "jl Bandung Lautan Api",
        gambar:
          "https://amp.businessinsider.com/images/535571746da811a021c9e143-750-562.jpg"
      }
    ]
  };

  choice = id => {
    var data = this.state.resto;
    var orresto = data.find(item => item.id === id);
    sessionStorage.setItem("resto", JSON.stringify([orresto]));
    console.log(orresto);
  };

  render() {
    return (
      <div>
        <Row>
          {this.state.resto.map((item, index) => (
            <Col xs="3">
              <Card
                nama={item.nama}
                lokasi={item.lokasi}
                gambar={item.gambar}
                choice={() => this.choice(item.id)}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
