import { iCard, manaCost, type } from "../../interfaces";

const displayType = {
  [type.arcane]: "A",
  [type.nature]: "N",
  [type.light]: "L",
  [type.shadow]: "S",
  [type.fell]: "F",
  [type.necro]: "Nec",
  [type.neutral]: "Neu"
};

interface ManaToDisplay {
  type: string;
  cost: manaCost;
}

export function displayCardCost(card: iCard): ManaToDisplay[] {
  return Object.entries(card.manaCost).reduce((acc, [key, values]) => {
    if (values) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      acc.push({ type: displayType[key], cost: values });
    }
    return acc;
  }, []);
}
