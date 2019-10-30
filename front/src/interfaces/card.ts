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

export interface cardManaCost {
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
  cardManaCost: cardManaCost;
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
  image?: string;
  attribute: string | type;
}

export interface iCardPosition {
  x: number;
  y: number;
}
