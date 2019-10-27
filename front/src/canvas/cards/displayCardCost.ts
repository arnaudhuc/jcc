import { iCard } from "../../interfaces";

export function displayCardCost(cardCost: any) {
  let cardCostArr = [];

  if (cardCost.arcaneManaCost) {
    cardCostArr.push({
      type: "A",
      cost: cardCost.arcaneManaCost
    });
  }
  if (cardCost.natureManaCost) {
    cardCostArr.push({
      type: "N",
      cost: cardCost.natureManaCost
    });
  }
  if (cardCost.lightManaCost) {
    cardCostArr.push({
      type: "L",
      cost: cardCost.lightManaCost
    });
  }
  if (cardCost.shadowManaCost) {
    cardCostArr.push({
      type: "S",
      cost: cardCost.shadowManaCost
    });
  }
  if (cardCost.fellManaCost) {
    cardCostArr.push({
      type: "F",
      cost: cardCost.fellManaCost
    });
  }
  if (cardCost.necroManaCost) {
    cardCostArr.push({
      type: "Nec",
      cost: cardCost.necroManaCost
    });
  }
  if (cardCost.neutralManaCost) {
    cardCostArr.push({
      type: "Neu",
      cost: cardCost.neutralManaCost
    });
  }

  return cardCostArr;
}
