import * as React from 'react';

const PlayerMap: React.FC = function () {
  return (
    <div className='gameMap gameMap--player'>
      <div className='gameMap__place'></div>
      <div className='gameMap__melee'></div>
      <div className='gameMap__permanent'></div>
      <div className='gameMap__caster'></div>
      <div className='gameMap__discard'></div>
      <div className='gameMap__mana'></div>
      <div className='gameMap__deck'></div>
    </div>
  )
}

export default PlayerMap;
