import { combineReducers } from 'redux'
import {visibilityFilter, todos} from './todo.reducers';


const reducers = combineReducers({
  visibilityFilter,
  todos
})

export default reducers;
