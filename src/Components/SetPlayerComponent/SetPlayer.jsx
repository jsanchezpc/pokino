import React from "react";
import { Redirect, Switch, BrowserRouter, Route } from "react-router-dom";
import {
  Container,
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  InputGroup,
  InputGroupText
} from "reactstrap";

import Play from "../PlayComponent/Play";

import Fade from "react-reveal/Fade";

const API = "https://sspl7.sse.codesandbox.io";

export default class SetPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      token: "",
      user: "",
      redirect: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Entrando...");

    let userBody = {
      username: this.state.username,
      sala: this.state.sala
    };

    return fetch(API + "/entrar", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(userBody)
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.token);
        if (data.ok == true) {
          this.setState({
            token: data.token,
            user: data.user,
            redirect: true
          });
        } else {
          console.log("Algo ha ido mal");
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.redirect) {
      console.log("Redirigiendo...");
      return (
        <Switch>
          <Redirect
            to={{
              pathname: "/jugar",
              state: { user: this.state.user }
            }}
          />
        </Switch>
      );
    } else {
      console.log("Bienvenido a Pokino");
    }
    return (
      <div>
        <BrowserRouter>
          <Container>
            <Fade delay={1000} duration={1000}>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="username" className="bold-text">
                    Elige un nombre para jugar!
                  </Label>
                  <InputGroup>
                    <InputGroupText>
                      <span role="img">🎮</span>
                    </InputGroupText>
                    <Input
                      required
                      id="username"
                      type="text"
                      name="username"
                      onChange={this.handleInputChange}
                      placeholder="Necesitas un nombre para jugar"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="username" className="bold-text">
                    Sala
                  </Label>
                  <InputGroup>
                    <InputGroupText>
                      <span role="img">🎎</span>
                    </InputGroupText>
                    <Input
                      required
                      onChange={this.handleInputChange}
                      type="text"
                      name="sala"
                      id="sala"
                      placeholder="¿A qué sala quieres unirte?"
                    />
                  </InputGroup>
                </FormGroup>
                <Button className="play-btn" block>
                  JUGAR
                </Button>
              </Form>
            </Fade>
          </Container>

          <Switch>
            <Route path="/jugar" component={Play} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
