import React from "react";
import { Spinner, Container } from "reactstrap";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Spinner>Loading...</Spinner>
        </Container>
      </div>
    );
  }
}
