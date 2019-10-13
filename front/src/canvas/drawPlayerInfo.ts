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

function drawHeroName(heroname: string) {
  const canvas = <HTMLCanvasElement>document.getElementById("main");
  const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.font='16px serif';
  ctx.fillText(heroname, 50, 50);
}

export const init = function() {
  const playerInfo = getMainPlayer();

  let playerName;

  playerName = playerInfo.then((name) => drawHeroName(name));
  console.log(playerName);
}
