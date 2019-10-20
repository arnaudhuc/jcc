import { createCanvas } from '../utils';
import { getCardsData, iCard } from '../../utils';
import { buildCard } from './buildCard';
import { canvasHeight, canvasWidth } from '../consts';


async function getAllCards() {
  return await getCardsData();
}

export async function displayCards() {
  const { data: cards } = await getAllCards();
  const canvasID = 'cards';
  const cardCanvas = <HTMLCanvasElement>createCanvas(canvasWidth, canvasHeight, canvasID);
  const canvasContainer = <HTMLDivElement>document.getElementById('canvas');

  canvasContainer.append(cardCanvas);

  cards.forEach((card: iCard, index: number) => {
    buildCard(card, index, cardCanvas);
  });
}