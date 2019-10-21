import { ADD_PLAYER, SET_PLAYER_LIFE, playerInfo } from "../actions";

interface iActionInterface {
  type: string;
  playerInfo: playerInfo;
}

interface iPlayer {
  name: string;
}

export function players(state = [], action: iActionInterface): any {
  switch (action.type) {
    case ADD_PLAYER:
      return [
        ...state,
        {
          life: action.playerInfo.life,
          name: action.playerInfo.name
        }
      ];
    case SET_PLAYER_LIFE:
      return state.map((player: iPlayer) => {
        if (player.name === action.playerInfo.name) {
          return Object.assign({}, player, {
            life: action.playerInfo.life
          });
        }
        return player;
      });
    default:
      return state;
  }
}
