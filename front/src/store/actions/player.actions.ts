/*
 * action types
 */

export const ADD_PLAYER = 'ADD_PLAYER'
export const SET_PLAYER_LIFE = "SET_PLAYER_LIFE"

/*
 * action creators
 */

export interface playerInfo {
  name: string;
  life: number;
}

interface setPlayerInfo {
  id: number;
  life: number;
}

export function addPlayer(playerInfo: playerInfo) {
  return { type: ADD_PLAYER, playerInfo }
}


export function setPlayerLife(playerInfo: playerInfo){
  return { type: SET_PLAYER_LIFE, playerInfo}
}
