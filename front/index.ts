import drawCanvas from './canvas';
import { store, addPlayer } from './store';
import { setPlayerLife } from './store/actions';
import { initActions } from './actions';

import './index.scss';

window.addEventListener('DOMContentLoaded', () => {
  drawCanvas();
  initActions();
});
