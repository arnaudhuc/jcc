import { drawPlayerInfo } from "./player/drawPlayerInfo";
import { drawBackground } from "./background/background";
import { displayCards } from "./cards/displayAllCards";
import { canvasHeight, canvasWidth } from "./consts";
import { createCanvas } from "./utils";

import "./canvas.scss";

const initCanvas = function() {
  createCanvas(canvasWidth, canvasHeight, "canvas");
  drawBackground();

  // async drawing, must be separated
  // drawPlayerInfo();
};

export default initCanvas;
