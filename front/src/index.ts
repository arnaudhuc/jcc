import drawCanvas from './canvas';
import {initRedux} from './redux';

window.addEventListener('DOMContentLoaded', () => {
  drawCanvas();
  initRedux();
})
