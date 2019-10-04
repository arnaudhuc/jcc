import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/Hello/Hello';
import Maps from './components/Map/Maps';

import { getPlayerData } from './service/getDataService';

import './reset.scss';
import './styles.scss';

const App: React.FC = function() {
  const [playerState, setPlayerState] = React.useState({});

  React.useEffect(() => {
    getPlayerData()
      .then(setPlayerState)
      .catch(e => {
        console.error('Cannot get playerData', e);
      });
  }, []);

  return (
    <div>
      <p>Salut</p>
      <Hello compiler='Typescript' framework='React JS' />
      <pre>My player state:</pre>
      <br />
      <code>{JSON.stringify(playerState, null, 2)}</code>
      <Maps />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
