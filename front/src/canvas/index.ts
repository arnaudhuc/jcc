import { drawPlayerInfo } from './drawPlayerInfo';
import { drawBackground } from './background';
import { drawCards } from './drawCard';

import './canvas.scss'

const initCanvas = function () {
  const canvasBlock = <HTMLDivElement>document.getElementById('canvas');

  canvasBlock.append(drawBackground());

  // async drawing, must be separated
  drawPlayerInfo();
  drawCards();
}

export default initCanvas;
export { createCanvas } from './createCanvas';
