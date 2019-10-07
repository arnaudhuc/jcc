import * as React from 'react';

interface playerInterface {
  data: any
}

const PlayerInfo: React.FC<playerInterface> = function(data) {
  return(
    <div>
      <h1>PLAYER INFO </h1>
      {/* <p>{data}</p> */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default PlayerInfo;
