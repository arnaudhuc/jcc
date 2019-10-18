import { createCanvas } from './';
import { getCardsData, Card } from '../utils/';

async function getAllCards() {
  return await getCardsData();

}
const cardWidth = 150;
let cardYPosition: number = 0;

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

function buildCard(card: Card, index: number, canvas: HTMLCanvasElement) {
  const context: CanvasRenderingContext2D = canvas.getContext('2d')!;
  const cardHeight = 300;
  const fontHeight = 10;
  const monsterImgWidth = cardWidth - 20;
  const monsterImgHeight = monsterImgWidth;
  const cardPosition = calcCardPosition(index);

  const classe = card.class.join(', ');

  context.fillStyle = 'blue';
  context.fillRect(cardPosition, 10, cardWidth, cardHeight);
  context.fillStyle = 'yellow';
  context.fillRect(cardPosition + 10, 20, monsterImgWidth, monsterImgHeight);
  context.fillStyle = 'white';
  context.textBaseline = 'top';
  context.textAlign = 'center';
  context.font = `${fontHeight}px helvetica, serif`;
  context.fillText(`${card.name} - ${classe}`, (cardPosition + cardWidth) / 2, monsterImgHeight + 25, cardWidth / 2);
  context.fillText(card.effectDescription ? card.effectDescription : '', (cardPosition + cardWidth) / 2, monsterImgHeight + 40);
}

function calcCardPosition(index: number): number {
  const maxCardRow = 6;
  const windowsW: number = window.innerWidth;
  if (((cardWidth * index) + (index * 10) + 10) + cardWidth > windowsW) {

  }
  return (cardWidth * index) + (index * 10) + 10;
} 