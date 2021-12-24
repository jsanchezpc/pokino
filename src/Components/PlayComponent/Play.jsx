import React from "react";
import { Container } from "reactstrap";

export default class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      token: "",
      user: "",
      redirect: false
    };
  }

  render() {
    return (
      <div>
        <Container>Jugando en la sala </Container>
      </div>
    );
  }
}
