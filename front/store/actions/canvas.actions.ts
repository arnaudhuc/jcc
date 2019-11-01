/*
 * action types
 */

export const ADD_CANVAS = "ADD_CANVAS";
/*
 * action creators
 */

export function addCanvas(canvas: any) {
  return { type: ADD_CANVAS, canvas };
}
