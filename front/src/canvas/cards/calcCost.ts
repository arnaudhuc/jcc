export function calcCost(cost: any): string {
  let result: string | number = "";
  const aCost: Array<string | number> = [];

  cost.forEach((card: any) => {
    let i = 0;
    if (card.type !== "Neu") {
      while (i <= card.cost) {
        aCost.push(card.type);
        i++;
      }
    } else {
      aCost.splice(0, 1, card.cost);
    }
  });

  result = aCost.join("");

  return result;
}
