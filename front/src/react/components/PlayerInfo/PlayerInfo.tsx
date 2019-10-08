import * as React from 'react';

interface playerInterface {
  name: string;
}


const PlayerInfo: React.FC<playerInterface> = function({name}) {
  return(
    <div>
      <h1>PLAYER INFO </h1>
      {/* <p>{data}</p> */}
      <pre>{JSON.stringify(name, null, 2)}</pre>
    </div>
  )
}

export default PlayerInfo;
