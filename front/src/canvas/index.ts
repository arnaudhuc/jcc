import {initRedux} from '../redux';
const canvas = <HTMLCanvasElement>document.getElementById("main");
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

// const createStore = (reducer, initialState) => {
//   let state = initialState;
//   const getState = () => state;

//   let listeners:Array = [];
//   const subscribe = listener => listeners.push(listener);

//   const dispatch = action => {
//     state = reducer(state, action);
//     listeners.forEach(listener = listener());
//   }

//   return {getState, subscribe, dispatch};
// }

const initCanvas = function () {
  initRedux();
}

export default initCanvas;
