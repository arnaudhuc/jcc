export enum type {
  arcane = "arcane",
  nature = "nature",
  light = "light",
  shadow = "shadow",
  fell = "fell",
  necro = "necro",
  neutral = "neutral"
}

export type ManaCost = number;

export interface iManaCost {
  [type.arcane]: ManaCost;
  [type.nature]: ManaCost;
  [type.light]: ManaCost;
  [type.shadow]: ManaCost;
  [type.fell]: ManaCost;
  [type.necro]: ManaCost;
  [type.neutral]: ManaCost;
}

export interface iCard {
  number: number;
  name: string;
  cardManaCost: iManaCost;
  type: string;
  class: Array<string>;
  position?: string;
  attack?: number;
  defense?: number;
  life?: number;
  mana?: number;
  effectDescription?: string;
  effectManaCost: iManaCost;
  deckId?: number;
  id?: string;
  image?: string;
  attribute: string | type;
}

export interface iCardPosition {
  x: number;
  y: number;
}
