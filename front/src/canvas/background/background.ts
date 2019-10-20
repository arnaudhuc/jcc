import { createCanvas } from '..';

export function drawBackground() {
  const wh = window.innerHeight;
  const ww = window.innerWidth
  const background = createCanvas(ww, wh, 'background');
  const ctx = <CanvasRenderingContext2D>background.getContext('2d');

  ctx.fillStyle = '#8d6e63';
  ctx.fillRect(0, 0, ww, wh);
  return background;
}
