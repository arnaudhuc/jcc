import { ADD_CANVAS } from '../actions';

export function canvas(state = [], action: any): any {
  switch (action.type) {
    case ADD_CANVAS:
      return Object.assign({}, state, { canvas: action.canvas });
    default:
      return state;
  }
}
