export interface iPlayerInfo {
  name: string;
  life: number;
}

export interface iActionInterface {
  type: string;
  playerInfo: iPlayerInfo;
}

export interface iPlayer {
  name: string;
}
