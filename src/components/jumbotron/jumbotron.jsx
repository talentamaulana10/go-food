import React, { Component } from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

export default class Jumbo extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">{this.props.judul}</h1>
            <p className="lead">{this.props.subjudul}</p>
            <Button tag={Link} to="/dashresto" className="btn btn-danger mt-5">
              Pesan Sekarang
            </Button>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
