import drawCanvas from './canvas';
import {store, addPlayer} from './store';
import { setPlayerLife } from './store/actions';

window.addEventListener('DOMContentLoaded', () => {
  drawCanvas();
})
