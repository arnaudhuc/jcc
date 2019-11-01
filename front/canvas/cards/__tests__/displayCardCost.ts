import { displayCardCost } from '../../cards';
import { iCard, iManaCost } from '../../../interfaces';

const cardManaCost: iManaCost = {
  arcane: 0,
  nature: 0,
  light: 0,
  shadow: 0,
  fell: 0,
  necro: 0,
  neutral: 0,
};

const card: iCard = {
  number: 1,
  name: 'Name',
  type: 'Champion',
  class: ['Mage'],
  attribute: 'necro',
  cardManaCost: cardManaCost,
  effectManaCost: cardManaCost,
};

describe('exportCardCost', () => {
  test('it should return A when the cost of the card is 1 arcane', () => {
    cardManaCost.arcane = 1;

    expect(displayCardCost(card.cardManaCost)).toMatchObject([
      { type: 'A', cost: 1 },
    ]);
  });

  test('it should return AA when the cost of the card is 2 arcane', () => {
    cardManaCost.arcane = 2;
    expect(displayCardCost(card.cardManaCost)).toMatchObject([
      { type: 'A', cost: 2 },
    ]);
  });

  test('it should return an object with 3A when the cost of the card is 3A', () => {
    cardManaCost.arcane = 3;
    expect(displayCardCost(card.cardManaCost)).toMatchObject([
      { type: 'A', cost: 3 },
    ]);
  });

  test('it should return an object with 3A and 3 Neu when the cost of the card is 3 Arcanes and 3 Neutral', () => {
    cardManaCost.arcane = 3;
    cardManaCost.neutral = 3;
    expect(displayCardCost(card.cardManaCost)).toMatchObject([
      { type: 'A', cost: 3 },
      { type: 'Neu', cost: 3 },
    ]);
  });

  test('it should return an object with 1 of all cost when the cost of the card is 1 in every mana type', () => {
    cardManaCost.arcane = 1;
    cardManaCost.neutral = 1;
    cardManaCost.nature = 1;
    cardManaCost.light = 1;
    cardManaCost.shadow = 1;
    cardManaCost.fell = 1;
    cardManaCost.necro = 1;
    expect(displayCardCost(card.cardManaCost)).toMatchObject([
      { type: 'A', cost: 1 },
      { type: 'N', cost: 1 },
      { type: 'L', cost: 1 },
      { type: 'S', cost: 1 },
      { type: 'F', cost: 1 },
      { type: 'Nec', cost: 1 },
      { type: 'Neu', cost: 1 },
    ]);
  });
});
