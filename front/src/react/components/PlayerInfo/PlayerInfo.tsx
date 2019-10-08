import * as React from 'react';

interface playerInterface {
  name: string;
}


const PlayerInfo: React.FC<playerInterface> = function({name}) {
  return(
    <div>
      <h1>PLAYER INFO </h1>
      {<p>{name}</p>}
    </div>
  )
}

export default PlayerInfo;
