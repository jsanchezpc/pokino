import React from "react";
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

import Fade from "react-reveal/Fade";

export default class SetPlayer extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Fade delay={1000} duration={1000}>
            <Form>
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
      </div>
    );
  }
}
