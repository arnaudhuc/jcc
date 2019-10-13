import { drawPlayerInfo } from './drawPlayerInfo';
import { drawBackground } from './background';

const initCanvas = function () {
  const canvases = [];
  const canvasBlock = <HTMLDivElement>document.getElementById('canvas');
  canvases.push(
    drawBackground(),
  )
  canvases.forEach(canvas => {
    canvasBlock.append(canvas);
  })

  // async drawing, must be separated
  drawPlayerInfo();
}

export default initCanvas;
export { createCanvas } from './createCanvas';
