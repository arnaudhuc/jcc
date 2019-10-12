/*
 * action types
 */

export const ADD_PLAYER = 'ADD_PLAYER'

/*
 * action creators
 */

export interface playerInfo {
  name: string;
  life: number;
}

export function addPlayer(playerInfo: playerInfo) {
  return { type: ADD_PLAYER, playerInfo }
}
