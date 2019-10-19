import { createCanvas } from './';
import { getCardsData, Card } from '../utils/';

const cardWidth = 150;
const cardHeight = 300;

interface iCardPosition {
  x: number,
  y: number
}

let cardPosition: iCardPosition = {
  x: 0,
  y: 0
}

async function getAllCards() {
  return await getCardsData();
}

function buildCard(card: Card, index: number, canvas: HTMLCanvasElement) {
  const context: CanvasRenderingContext2D = canvas.getContext('2d')!;
  const fontHeight = 10;
  const monsterImgWidth = cardWidth - 20;
  const monsterImgHeight = monsterImgWidth;
  const cardPosition = calcCardPosition(index);

  const classe = card.class.join(', ');

  context.fillStyle = 'blue';
  context.fillRect(cardPosition.x, cardPosition.y, cardWidth, cardHeight);
  context.fillStyle = 'yellow';
  context.fillRect(cardPosition.x + 10, cardPosition.y + 10, monsterImgWidth, monsterImgHeight);
  context.fillStyle = 'white';
  context.textBaseline = 'top';
  context.textAlign = 'center';
  context.font = `${fontHeight}px helvetica, serif`;
  context.fillText(`${card.name} / ${index} - ${classe}`, (cardPosition.x + (cardWidth / 2)), cardPosition.y + monsterImgHeight + 25, cardWidth / 2);
  context.fillText(card.effectDescription ? card.effectDescription : '', (cardPosition.x + (cardWidth / 2)), cardPosition.y + monsterImgHeight + 40);
}

export function calcCardPosition(index: number): iCardPosition {
  const maxCardRow = 6;

  if (index !== 0 && (index % maxCardRow) === 0) {
    cardPosition.y = cardPosition.y + (10 + cardHeight)
  }

  cardPosition.x = (cardWidth * (index % maxCardRow)) + ((index % maxCardRow) * 10) + 10;
  return cardPosition;
}

export async function drawCards() {
  const { data: cards } = await getAllCards();
  const canvasID = 'cards';
  const cardCanvas = <HTMLCanvasElement>createCanvas(undefined, undefined, canvasID);
  const canvasContainer = <HTMLDivElement>document.getElementById('canvas');

  canvasContainer.append(cardCanvas);

  cards.forEach((card: Card, index: number) => {
    buildCard(card, index, cardCanvas);
  });
}