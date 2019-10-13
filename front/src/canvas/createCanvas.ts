const PIXEL_RATIO = (function () {
  const can = <HTMLCanvasElement>document.createElement("canvas");
  const ctx = <CanvasRenderingContext2D>can.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const bsr = ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio || 1;

  return dpr / bsr;
})();


export const createCanvas = function (w: number, h: number, id: string = new Date().getMilliseconds().toString() , ratio?: number): HTMLCanvasElement {
  if (!ratio) { ratio = PIXEL_RATIO; }
  const can = <HTMLCanvasElement>document.createElement("canvas");
  const ctx = <CanvasRenderingContext2D>can.getContext('2d');
  can.setAttribute('id', id);
  can.width = w * ratio;
  can.height = h * ratio;
  can.style.width = w + "px";
  can.style.height = h + "px";
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  return can;
}
