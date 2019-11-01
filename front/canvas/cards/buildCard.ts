import { iCard, iCardPosition } from '../../interfaces';
import { store } from '../../store';
import Konva from 'konva';
import { displayCardCost } from './index';

const cardWidth = 200;
const cardHeight = 300;

const cardPosition: iCardPosition = {
  x: 0,
  y: 0,
};

function calcCost(cost: any): string {
  const aCost: Array<string | number> = [];

  cost.forEach((card: any) => {
    let i = 0;
    if (card.type !== 'Neu') {
      while (i <= card.cost) {
        aCost.push(card.type);
        i++;
      }
    } else {
      aCost.splice(0, 1, card.cost);
    }
  });

  return aCost.join('');
}

function calcCardCost(card: iCard): string {
  const cardCost = displayCardCost(card.cardManaCost);

  return calcCost(cardCost);
}

function calcEffectCost(card: iCard): string {
  const effectCost = displayCardCost(card.effectManaCost);

  return calcCost(effectCost);
}

export function calcCardPosition(index: number): iCardPosition {
  const maxCardRow = 6;

  if (index !== 0 && index % maxCardRow === 0) {
    cardPosition.y = cardPosition.y + (10 + cardHeight);
  }

  cardPosition.x =
    cardWidth * (index % maxCardRow) + (index % maxCardRow) * 10 + 10;
  return cardPosition;
}

export function buildCard(card: iCard, index: number) {
  const { canvas: storage } = store.getState();
  const fontHeight = 10;
  const monsterImgWidth = cardWidth - 20;
  const monsterImgHeight = monsterImgWidth * 0.7;
  const cardPosition = calcCardPosition(index);
  const classe = card.class.join(', ');
  const cardType = card.attribute.toLowerCase();
  const colorMap: { [key: string]: string } = {
    arcane: '#42a5f5',
    fell: '#ef5350',
    nature: '#66bb6a',
    necro: '#ba68c8',
    shadow: '#7e57c2',
    light: '#ffee58',
    neutral: '#e0e0e0',
  };
  const descBackgroundWidth = monsterImgWidth - 30;
  const descBackgroundHeight = 30;

  const layer = new Konva.Layer();
  const group = new Konva.Group({
    draggable: true,
  });

  const cardBackground = new Konva.Rect({
    fill: colorMap[cardType],
    width: cardWidth,
    height: cardHeight,
    x: cardPosition.x,
    y: cardPosition.y,
    stroke: 'black',
    strokeWidth: 4,
  });
  group.add(cardBackground);

  const imgObj = new Image();

  imgObj.src = 'https://i.ytimg.com/vi/Ztm2a_7g4Kw/maxresdefault.jpg';

  const cardImage = new Konva.Image({
    image: imgObj,
    width: monsterImgWidth,
    height: monsterImgHeight,
    x: cardPosition.x + 10,
    y: cardPosition.y + 25,
    stroke: 'black',
    strokeWidth: 1,
  });
  group.add(cardImage);

  const cardName = new Konva.Text({
    fill: '#000',
    fontFamily: 'Arial serif',
    fontSize: fontHeight,
    text: `${card.name}`,
    x: cardPosition.x + 10,
    y: cardPosition.y + 10,
    width: cardWidth - 20,
  });
  group.add(cardName);

  const cardCostText = calcCardCost(card);

  const cardCost = new Konva.Text({
    fill: '#000',
    fontFamily: 'Arial serif',
    fontSize: fontHeight,
    text: cardCostText,
    x: cardPosition.x + cardWidth - 60,
    y: cardPosition.y + 10,
    width: 50,
    align: 'right',
  });
  group.add(cardCost);

  const effectCostText = calcEffectCost(card);

  const cardEffectCost = new Konva.Text({
    fill: '#000',
    fontFamily: 'Arial serif',
    fontSize: fontHeight,
    text: effectCostText || '',
    x: cardPosition.x + 10,
    y: cardPosition.y + monsterImgHeight + 100,
    width: 20,
  });
  group.add(cardEffectCost);

  const cardEffect = new Konva.Text({
    fill: '#000',
    fontFamily: 'Arial serif',
    fontSize: fontHeight,
    text: card.effectDescription || '',
    x: cardPosition.x + 40,
    y: cardPosition.y + monsterImgHeight + 100,
    width: cardWidth - 60,
  });
  group.add(cardEffect);

  const cardClassBackground = new Konva.Rect({
    fill: 'yellow',
    width: descBackgroundWidth,
    height: descBackgroundHeight,
    stroke: 'black',
    strokeWidth: 1,
    x: cardPosition.x + 25,
    y: cardPosition.y + monsterImgHeight + 15,
  });

  group.add(cardClassBackground);

  const cardClass = new Konva.Text({
    fill: '#000',
    fontFamily: 'Arial',
    fontSize: fontHeight,
    text: `${card.type} - ${classe} - ${card.position}`,
    x: cardPosition.x + 25,
    y: cardPosition.y + monsterImgHeight + 25,
    width: monsterImgWidth - 30,
    align: 'center',
  });
  group.add(cardClass);

  const cardLife = new Konva.Text({
    fill: '#000',
    fontFamily: 'Arial',
    fontSize: fontHeight,
    text: `${card.life}`,
    x: cardPosition.x + monsterImgWidth / 2 + 5,
    y: cardPosition.y + monsterImgHeight + 50,
    width: 10,
    align: 'center',
  });
  group.add(cardLife);

  const cardAttack = new Konva.Text({
    fill: '#000',
    fontFamily: 'Arial',
    fontSize: fontHeight,
    text: `${card.attack}`,
    x: cardPosition.x + 15,
    y: cardPosition.y + monsterImgHeight + 50,
    width: 10,
    align: 'center',
  });
  group.add(cardAttack);

  const cardDefense = new Konva.Text({
    fill: '#000',
    fontFamily: 'Arial',
    fontSize: fontHeight,
    text: `${card.defense}`,
    x: cardPosition.x + cardWidth - 20,
    y: cardPosition.y + monsterImgHeight + 50,
    width: 10,
    align: 'center',
  });
  group.add(cardDefense);

  const cardMana = new Konva.Text({
    fill: '#000',
    fontFamily: 'Arial',
    fontSize: fontHeight,
    text: `${card.mana}`,
    x: cardPosition.x + monsterImgWidth / 2 + 5,
    y: cardPosition.y + cardHeight - 15,
    width: 10,
    align: 'center',
  });
  group.add(cardMana);

  group.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
  });
  group.on('mouseout', function() {
    document.body.style.cursor = 'default';
  });

  layer.add(group);
  storage.canvas.add(layer);
}
