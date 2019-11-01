import { iPlayerInfo, iActionInterface } from '../../interfaces';
/*
 * action types
 */

export const ADD_PLAYER = 'ADD_PLAYER';
export const SET_PLAYER_LIFE = 'SET_PLAYER_LIFE';

/*
 * action creators
 */

export function addPlayer(playerInfo: iPlayerInfo): iActionInterface {
  return { type: ADD_PLAYER, playerInfo };
}

export function setPlayerLife(playerInfo: iPlayerInfo): iActionInterface {
  return { type: SET_PLAYER_LIFE, playerInfo };
}
