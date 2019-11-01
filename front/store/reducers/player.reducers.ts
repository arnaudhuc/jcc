import { ADD_PLAYER, SET_PLAYER_LIFE } from '../actions';
import { iActionInterface, iPlayer } from '../../interfaces';

export function players(state = [], action: iActionInterface): any {
  switch (action.type) {
    case ADD_PLAYER:
      return [
        ...state,
        {
          life: action.playerInfo.life,
          name: action.playerInfo.name,
        },
      ];
    case SET_PLAYER_LIFE:
      return state.map((player: iPlayer) => {
        if (player.name === action.playerInfo.name) {
          return Object.assign({}, player, {
            life: action.playerInfo.life,
          });
        }
        return player;
      });
    default:
      return state;
  }
}
