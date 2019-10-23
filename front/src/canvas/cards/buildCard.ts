import { iCard } from "../../utils";
import { store } from "../../store";
import Konva from "konva";
import { canvas } from "../../store/reducers/canvas.reducers";

const cardWidth = 200;
const cardHeight = 300;

interface iCardPosition {
  x: number;
  y: number;
}

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
  const cardType = card.type.toLowerCase();
  const colorMap: { [key: string]: string } = {
    arcane: "#42a5f5",
    fell: "#ef5350",
    nature: "#66bb6a",
    necro: "#ba68c8",
    shadow: "#7e57c2",
    light: "#ffee58"
  };

  const layer = new Konva.Layer();
  const group = new Konva.Group({
    draggable: true
  });

  const cardBackground = new Konva.Rect({
    fill: colorMap[cardType],
    width: cardWidth,
    height: cardHeight,
    x: cardPosition.x,
    y: cardPosition.y
  });
  group.add(cardBackground);

  const cardImage = new Konva.Rect({
    fill: "yellow",
    width: monsterImgWidth,
    height: monsterImgHeight,
    x: cardPosition.x + 10,
    y: cardPosition.y + 10
  });
  group.add(cardImage);

  const cardName = new Konva.Text({
    fill: "#000",
    fontFamily: "helvetica serif",
    fontSize: 16,
    text: `${card.name} / ${index} - ${classe}`,
    x: cardPosition.x + cardWidth / 2,
    y: cardPosition.y + monsterImgHeight + 25,
    width: cardWidth / 2
  });
  group.add(cardName);

  const cardDesc = new Konva.Text({
    fill: "#000",
    fontFamily: "helvetica serif",
    fontSize: 16,
    text: card.effectDescription ? card.effectDescription : "",
    x: cardPosition.x + cardWidth / 2,
    y: cardPosition.y + monsterImgHeight + 25,
    width: cardWidth / 2
  });
  group.add(cardDesc);

  group.on("mouseover", function() {
    document.body.style.cursor = "pointer";
  });
  group.on("mouseout", function() {
    document.body.style.cursor = "default";
  });

  layer.add(group);
  storage.canvas.add(layer);
}
