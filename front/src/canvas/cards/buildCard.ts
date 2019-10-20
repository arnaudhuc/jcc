import { iCard } from '../../utils';

const cardWidth = 200;
const cardHeight = 300;

interface iCardPosition {
  x: number,
  y: number
}

let cardPosition: iCardPosition = {
  x: 0,
  y: 0
}

export function calcCardPosition(index: number): iCardPosition {
  const maxCardRow = 6;

  if (index !== 0 && (index % maxCardRow) === 0) {
    cardPosition.y = cardPosition.y + (10 + cardHeight)
  }

  cardPosition.x = (cardWidth * (index % maxCardRow)) + ((index % maxCardRow) * 10) + 10;
  return cardPosition;
}

export function buildCard(card: iCard, index: number, canvas: HTMLCanvasElement) {
  const context: CanvasRenderingContext2D = canvas.getContext('2d')!;
  const fontHeight = 10;
  const monsterImgWidth = cardWidth - 20;
  const monsterImgHeight = monsterImgWidth * 0.7;
  const cardPosition = calcCardPosition(index);
  const classe = card.class.join(', ');
  const cardType = card.type.toLowerCase();
  const colorMap: { [key: string]: string; } = {
    arcane: '#42a5f5',
    fell: '#ef5350',
    nature: '#66bb6a',
    necro: '#ba68c8',
    shadow: '#7e57c2',
    light: '#ffee58'
  }

  context.fillStyle = colorMap[cardType];
  context.fillRect(cardPosition.x, cardPosition.y, cardWidth, cardHeight);
  context.fillStyle = 'yellow';
  context.fillRect(cardPosition.x + 10, cardPosition.y + 10, monsterImgWidth, monsterImgHeight);
  context.fillStyle = '#000';
  context.textBaseline = 'top';
  context.textAlign = 'center';
  context.font = `${fontHeight}px helvetica, serif`;
  context.fillText(`${card.name} / ${index} - ${classe}`, (cardPosition.x + (cardWidth / 2)), cardPosition.y + monsterImgHeight + 25, cardWidth / 2);
  context.fillText(card.effectDescription ? card.effectDescription : '', (cardPosition.x + (cardWidth / 2)), cardPosition.y + monsterImgHeight + 40);
}