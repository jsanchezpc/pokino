import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import SetPlayer from "./Components/SetPlayerComponent/SetPlayer";

import Play from "./Components/PlayComponent/Play";

import Fade from "react-reveal/Fade";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fade delay={900} duration={1200}>
          <h1 className="green-text mt-3">Pokino</h1>
          <h2>🍷🍸🍹🍺🥢🍫</h2>
        </Fade>

        <div className="setPlayer mt-5">
          <SetPlayer />
        </div>

        <Switch>
          <Route path="/jugar" component={Play} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
