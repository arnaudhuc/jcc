export enum type {
  arcane = "arcane",
  nature = "nature",
  light = "light",
  shadow = "shadow",
  fell = "fell",
  necro = "necro",
  neutral = "neutral"
}

export type manaCost = number;

export interface ManaCost {
  [type.arcane]: manaCost;
  [type.nature]: manaCost;
  [type.light]: manaCost;
  [type.shadow]: manaCost;
  [type.fell]: manaCost;
  [type.necro]: manaCost;
  [type.neutral]: manaCost;
}

export interface iCard {
  number: number;
  name: string;
  manaCost: ManaCost;
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
