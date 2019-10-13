import {ADD_PLAYER, SET_PLAYER_LIFE, playerInfo} from '../actions';


interface actionInterface {
  type: string;
  playerInfo: playerInfo
}

export function players(state = [], action: actionInterface): any {
  switch (action.type) {
    case ADD_PLAYER:
      return [
        ...state,
        {
          life: action.playerInfo.life,
          name: action.playerInfo.name
        }
      ]
    case SET_PLAYER_LIFE:
      return state.map((player) => {
        if (player.name === action.playerInfo.name) {
          return Object.assign({}, player, {
            life: action.playerInfo.life
          })
        }
        return player
      })
    default:
      return state
  }
}
