import { createCanvas } from "../utils";
import { canvasHeight, canvasWidth } from "../consts";

export function drawBackground() {
  const background = createCanvas(canvasWidth, canvasHeight, "background");
  const ctx = <CanvasRenderingContext2D>background.getContext("2d");

  ctx.fillStyle = "#8d6e63";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  return background;
}
