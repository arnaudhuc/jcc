import { displayCardCost } from "../";
import { iCard } from "../../../interfaces";

let card: iCard = {
  number: 1,
  name: "Name",
  type: "Champion",
  class: ["Mage"],
  attribute: "necro",
  arcaneManaCost: 0,
  natureManaCost: 0,
  lightManaCost: 0,
  shadowManaCost: 0,
  fellManaCost: 0,
  necroManaCost: 0,
  neutralManaCost: 0
};

describe("exportCardCost", () => {
  test("it should return A when the cost of the card is 1 arcane", () => {
    card.arcaneManaCost = 1;

    expect(displayCardCost(card)).toMatchObject([{ type: "A", cost: 1 }]);
  });

  test("it should return AA when the cost of the card is 2 arcane", () => {
    card.arcaneManaCost = 2;
    expect(displayCardCost(card)).toMatchObject([{ type: "A", cost: 2 }]);
  });

  test("it should return an object with 3A when the cost of the card is 3A", () => {
    card.arcaneManaCost = 3;
    expect(displayCardCost(card)).toMatchObject([{ type: "A", cost: 3 }]);
  });

  test("it should return an object with 3A and 3 Neu when the cost of the card is 3 Arcanes and 3 Neutral", () => {
    card.arcaneManaCost = 3;
    card.neutralManaCost = 3;
    expect(displayCardCost(card)).toMatchObject([
      { type: "A", cost: 3 },
      { type: "Neu", cost: 3 }
    ]);
  });

  test("it should return an object with 1 of all cost when the cost of the card is 1 in every mana type", () => {
    card.arcaneManaCost = 1;
    card.neutralManaCost = 1;
    card.natureManaCost = 1;
    card.lightManaCost = 1;
    card.shadowManaCost = 1;
    card.fellManaCost = 1;
    card.necroManaCost = 1;
    expect(displayCardCost(card)).toMatchObject([
      { type: "A", cost: 1 },
      { type: "N", cost: 1 },
      { type: "L", cost: 1 },
      { type: "S", cost: 1 },
      { type: "F", cost: 1 },
      { type: "Nec", cost: 1 },
      { type: "Neu", cost: 1 }
    ]);
  });
});
