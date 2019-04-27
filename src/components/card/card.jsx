import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

export default class MyCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            height="200px"
            width="100%"
            src={this.props.gambar}
            alt="Card image cap"
          />
          <CardBody>
            <CardSubtitle>{this.props.nama}</CardSubtitle>
            <CardText>{this.props.harga}</CardText>
            <Button onClick={this.props.choice}>Aku mau Beli</Button>{" "}
          </CardBody>
        </Card>
      </div>
    );
  }
}
