import * as React from 'react';

import OpponentMap from './OpponentMap';
import PlayerMap from './PlayerMap';

import './gameMap.scss';

const Maps: React.FC = function() {
  return(
    <>
    <br/>
    <br/>
    <br/>
      Opponent
      <OpponentMap />
      Player
      <PlayerMap />
    </>
  )
}

export default Maps;
