import {ADD_PLAYER, playerInfo} from '../actions';


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
    default:
      return state
  }
}
