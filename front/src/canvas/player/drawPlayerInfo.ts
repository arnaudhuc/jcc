import { getPlayerData } from '../../utils';
import { createCanvas } from '../utils';
import { store, addPlayer } from '../../store';
import { setPlayerLife } from '../../store/actions';
import { canvasHeight, canvasWidth } from '../consts';

async function getAllPlayer() {
  return await getPlayerData();
}

async function getMainPlayer() {
  const playersId = getAllPlayer();
  let id;

  return playersId.then((data) => {
    return getPlayerData(data.data[0]._id).then(player => {
      return player.data.name;
    })
  })

}

function drawHeroName(playerName: string) {
  const canvas = createCanvas(canvasWidth, canvasHeight, 'player');
  const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
  // store.subscribe(() => {
  //   console.log('subscribe');
  //   console.log(store.getState());
  // });

  store.dispatch(addPlayer({ name: playerName, life: 30 }));

  store.dispatch(setPlayerLife({ name: playerName, life: 19 }));

  store.dispatch(setPlayerLife({ name: playerName, life: 20 }));

  store.dispatch(setPlayerLife({ name: playerName, life: 190 }));

  ctx.font = '16px serif';
  ctx.fillText(playerName, 50, 50);

  const canvasBlock = <HTMLDivElement>document.getElementById('canvas');
  canvasBlock.append(canvas);

}

export const drawPlayerInfo = function () {
  const playerInfo = getMainPlayer();
  playerInfo.then((name) => drawHeroName(name));
}
