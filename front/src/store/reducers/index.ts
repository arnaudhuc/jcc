import { combineReducers } from "redux";
import { players } from "./player.reducers";

const reducers = combineReducers({
  players
});

export default reducers;
