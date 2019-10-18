import { createCanvas } from './';
import { getCardsData, Card } from '../utils/';



async function getAllCards() {
  return await getCardsData();

}

export async function drawCards () {
  const {data: cards} = await getAllCards();
  const canvasID = 'cards';
  const cardCanvas = createCanvas(undefined, undefined, canvasID);

  document.append(cardCanvas);

  cards.data.forEach((card: Card, index: number) => {
    console.log(card, index);
  });
}
