import { canvasHeight, canvasWidth } from '../consts';
import Konva from 'konva';
import { store } from '../../store';

export function drawBackground() {
  const { canvas: storage } = store.getState();
  const layer = new Konva.Layer();
  const background = new Konva.Rect({
    x: 0,
    y: 0,
    width: canvasWidth,
    height: canvasHeight,
    fill: '#8d6e63',
  });

  layer.add(background);
  storage.canvas.add(layer);
}
