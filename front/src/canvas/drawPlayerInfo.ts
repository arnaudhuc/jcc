import { getPlayerData } from '../utils';


async function getAllPlayer() {
  const players = await getPlayerData();
  return players
}

async function getMainPlayer() {
  const playersId = getAllPlayer();
  let id;
  playersId.then((data) => {
     id = data.data._id
  })
  const player = await getPlayerData(id);

  return player.data[0].name;
}


export const init = function() {
  const playerInfo = getMainPlayer();

  let playerName;

  playerName = playerInfo.then((info) => info);
  console.log(playerName);
}
