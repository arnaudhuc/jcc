import * as React from 'react';


const OpponentMap: React.FC = function() {
  return(
    <div className='gameMap gameMap--opponent'>
      <div className='gameMap__place'>gameMap__place</div>
      <div className='gameMap__melee'>gameMap__melee</div>
      <div className='gameMap__permanent'>gameMap__permanent</div>
      <div className='gameMap__caster'>gameMap__caster</div>
      <div className='gameMap__discard'>gameMap__discard</div>
      <div className='gameMap__mana'>gameMap__mana</div>
      <div className='gameMap__deck'>gameMap__deck</div>
    </div>
  )
}

export default OpponentMap;
