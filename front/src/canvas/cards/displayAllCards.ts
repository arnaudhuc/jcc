import { getCardsData } from "../../utils";
import { iCard } from "../../interfaces";
import { buildCard } from "./buildCard";

async function getAllCards() {
  return await getCardsData();
}

export async function displayCards(): Promise<any> {
  const { data: cards } = await getAllCards();

  cards.forEach((card: iCard, index: number) => {
    buildCard(card, index);
  });
}
