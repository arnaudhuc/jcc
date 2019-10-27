export enum type {
  arcane = "arcane",
  nature = "nature",
  light = "light",
  shadow = "shadow",
  fell = "fell",
  necro = "necro",
  neutral = "neutral"
}

export interface iCard {
  number: number;
  name: string;
  arcaneManaCost: number;
  natureManaCost: number;
  lightManaCost: number;
  shadowManaCost: number;
  fellManaCost: number;
  necroManaCost: number;
  neutralManaCost: number;
  type: string;
  class: Array<string>;
  position?: string;
  attack?: number;
  defense?: number;
  life?: number;
  mana?: number;
  effectDescription?: string;
  effectarcaneManaCost?: number;
  effectnatureManaCost?: number;
  effectlightManaCost?: number;
  effectshadowManaCost?: number;
  effectfellManaCost?: number;
  effectnecroManaCost?: number;
  effectneutralManaCost?: number;
  deckId?: number;
  id?: string;
  attribute: string | type;
}

export interface iCardPosition {
  x: number;
  y: number;
}
