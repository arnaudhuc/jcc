import { combineReducers } from 'redux';
import { players } from './player.reducers';
import { canvas } from './canvas.reducers';

const reducers = combineReducers({
  players,
  canvas,
});

export default reducers;
