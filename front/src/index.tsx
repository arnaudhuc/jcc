import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./components/components/Hello";

import { getPlayerData } from "./service/getDataService";

import "./styles.scss";

const App: React.FC = function() {
  const [playerState, setPlayerState] = React.useState({});

  React.useEffect(() => {
    getPlayerData()
      .then(setPlayerState)
      .catch(e => {
        console.error("Cannot get playerData", e);
      });
  }, []);

  return (
    <div>
      <p>Salut</p>
      <Hello compiler="Typescript" framework="React JS" />
      <pre>My player state:</pre>
      <br />
      <code>{JSON.stringify(playerState, null, 4)}</code>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
