import { createCanvas } from "../utils";
import { getCardsData, iCard } from "../../utils";
import { buildCard } from "./buildCard";
import { canvasHeight, canvasWidth } from "../consts";

async function getAllCards() {
  return await getCardsData();
}

export async function displayCards(): Promise<any> {
  const { data: cards } = await getAllCards();

  cards.forEach((card: iCard, index: number) => {
    buildCard(card, index);
  });
}
