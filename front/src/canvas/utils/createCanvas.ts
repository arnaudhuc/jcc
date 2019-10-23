import Konva from "konva";
import { store } from "../../store";
import { addCanvas } from "../../store/actions";

const PIXEL_RATIO = (function() {
  const can = <HTMLCanvasElement>document.createElement("canvas");
  try {
    const ctx = <any>can.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const bsr =
      ctx &&
      (ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1);
    return dpr / bsr;
  } catch (e) {
    return 1;
  }
})();

export const createCanvas = function(
  w: number = window.innerWidth,
  h: number = window.innerHeight,
  id: string = new Date().getMilliseconds().toString(),
  ratio?: number
): any {
  const can = new Konva.Stage({
    container: id,
    width: w,
    height: h
  });

  store.dispatch(addCanvas(can));
};
