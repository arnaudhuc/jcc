import * as React from 'react';

interface playerInterface {
  data: any
}

const PlayerInfo: React.FC<playerInterface> = function({data}) {
  console.log(data);
  return(
    <p>
      Name : {data}
    </p>
  )
}

export default PlayerInfo;
