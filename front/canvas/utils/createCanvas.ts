import Konva from 'konva';
import { store } from '../../store';
import { addCanvas } from '../../store/actions';

export const createCanvas = function(
  w: number = window.innerWidth,
  h: number = window.innerHeight,
  id: string = new Date().getMilliseconds().toString(),
): any {
  const can = new Konva.Stage({
    container: id,
    width: w,
    height: h,
  });

  store.dispatch(addCanvas(can));
};
