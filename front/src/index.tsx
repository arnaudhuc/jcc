import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/Hello/Hello';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import { getPlayerData } from './service/getDataService';

import './reset.scss';
import './styles.scss';

const App: React.FC = function() {
  // playerState = {
  //   "data": {
  //     "data": {
  //       "deck": [
  //         1,
  //         2
  //       ],
  //       "_id": "5d8ca25d1a79cf6059758fde",
  //       "name": "Spraypaint",
  //       "password": "123456789",
  //       "__v": 0
  //     }
  //   }
  // }
  const [playerState, setPlayerState] = React.useState({});

  React.useEffect(() => {
    getPlayerData('5d8ca25d1a79cf6059758fde')
      .then(setPlayerState)
      .catch(e => {
        console.error('Cannot get playerData', e);
      });
  }, []);

  return (
    <div>
      <p>Salut</p>
      <Hello compiler='Typescript' framework='React JS' />
      <PlayerInfo data={playerState}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
