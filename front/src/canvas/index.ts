import { drawPlayerInfo } from './player/drawPlayerInfo';
import { drawBackground } from './background/background';
import { displayCards } from './cards/displayAllCards';

import './canvas.scss'

const initCanvas = function () {
  const canvasBlock = <HTMLDivElement>document.getElementById('canvas');

  canvasBlock.append(drawBackground());

  // async drawing, must be separated
  drawPlayerInfo();
  displayCards();
}

export default initCanvas;
