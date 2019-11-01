import { iPlayerInfo } from "../../interfaces";
/*
 * action types
 */

export const ADD_PLAYER = "ADD_PLAYER";
export const SET_PLAYER_LIFE = "SET_PLAYER_LIFE";

/*
 * action creators
 */

export function addPlayer(playerInfo: iPlayerInfo) {
  return { type: ADD_PLAYER, playerInfo };
}

export function setPlayerLife(playerInfo: iPlayerInfo) {
  return { type: SET_PLAYER_LIFE, playerInfo };
}
