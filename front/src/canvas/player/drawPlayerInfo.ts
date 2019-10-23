import { getPlayerData } from "../../utils";
import { store, addPlayer } from "../../store";
import { setPlayerLife } from "../../store/actions";
import Konva from "konva";
async function getAllPlayer() {
  return await getPlayerData();
}

async function getMainPlayer() {
  const playersId = getAllPlayer();
  let id;

  return playersId.then(data => {
    return getPlayerData(data.data[0]._id).then(player => {
      return player.data.name;
    });
  });
}

function drawHeroName(playerName: string) {
  const { canvas: storage } = store.getState();
  // store.subscribe(() => {
  //   console.log("subscribe");
  // console.log(storage.canvas);
  // });

  const layer = new Konva.Layer();

  const playerText = new Konva.Text({
    fontSize: 16,
    fontFamily: "serif",
    text: playerName,
    x: 50,
    y: 50
  });

  store.dispatch(addPlayer({ name: playerName, life: 30 }));

  store.dispatch(setPlayerLife({ name: playerName, life: 19 }));

  store.dispatch(setPlayerLife({ name: playerName, life: 20 }));

  store.dispatch(setPlayerLife({ name: playerName, life: 190 }));

  layer.add(playerText);

  storage.canvas.add(layer);
}

export const drawPlayerInfo = function() {
  const playerInfo = getMainPlayer();
  playerInfo.then(name => drawHeroName(name));
};
