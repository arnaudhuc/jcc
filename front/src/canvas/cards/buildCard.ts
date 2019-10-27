import { iCard, iCardPosition } from "../../interfaces";
import { store } from "../../store";
import Konva from "konva";

const cardWidth = 200;
const cardHeight = 300;

let cardPosition: iCardPosition = {
  x: 0,
  y: 0
};

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
  const classe = card.class.join(", ");
  const cardType = card.attribute.toLowerCase();
  const colorMap: { [key: string]: string } = {
    arcane: "#42a5f5",
    fell: "#ef5350",
    nature: "#66bb6a",
    necro: "#ba68c8",
    shadow: "#7e57c2",
    light: "#ffee58",
    neutral: "#e0e0e0"
  };
  const descBackgroundWidth = monsterImgWidth - 30;
  const descBackgroundHeight = 30;

  const layer = new Konva.Layer();
  const group = new Konva.Group({
    draggable: true
  });

  const cardBackground = new Konva.Rect({
    fill: colorMap[cardType],
    width: cardWidth,
    height: cardHeight,
    x: cardPosition.x,
    y: cardPosition.y,
    stroke: "black",
    strokeWidth: 4
  });
  group.add(cardBackground);

  const cardImage = new Konva.Rect({
    width: monsterImgWidth,
    height: monsterImgHeight,
    x: cardPosition.x + 10,
    y: cardPosition.y + 25,
    stroke: "black",
    strokeWidth: 1
  });
  group.add(cardImage);

  const cardName = new Konva.Text({
    fill: "#000",
    fontFamily: "helvetica serif",
    fontSize: fontHeight,
    text: `${card.name} / ${index}`,
    x: cardPosition.x + 10,
    y: cardPosition.y + 10,
    width: cardWidth - 20
  });
  group.add(cardName);

  const cardDesc = new Konva.Text({
    fill: "#000",
    fontFamily: "helvetica serif",
    fontSize: fontHeight,
    text: card.effectDescription ? card.effectDescription : "",
    x: cardPosition.x + 10,
    y: cardPosition.y + monsterImgHeight + 50,
    width: cardWidth - 20
  });
  group.add(cardDesc);

  const cardClassBackground = new Konva.Rect({
    fill: "yellow",
    width: descBackgroundWidth,
    height: descBackgroundHeight,
    stroke: "black",
    strokeWidth: 1,
    x: cardPosition.x + 25,
    y: cardPosition.y + monsterImgHeight + 15
  });

  group.add(cardClassBackground);

  const cardClass = new Konva.Text({
    fill: "#000",
    fontFamily: "helvetica",
    fontSize: fontHeight,
    text: `${card.type} - ${classe} - ${card.position}`,
    x: cardPosition.x + 25,
    y: cardPosition.y + monsterImgHeight + 25,
    width: monsterImgWidth - 30,
    align: "center"
  });
  group.add(cardClass);

  group.on("mouseover", function() {
    document.body.style.cursor = "pointer";
  });
  group.on("mouseout", function() {
    document.body.style.cursor = "default";
  });

  layer.add(group);
  storage.canvas.add(layer);
}
