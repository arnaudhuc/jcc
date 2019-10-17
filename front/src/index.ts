import drawCanvas from './canvas';
import { store, addPlayer } from './store';
import { setPlayerLife } from './store/actions';

import './index.scss'

window.addEventListener('DOMContentLoaded', () => {
  drawCanvas();
})
