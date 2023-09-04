import { createStore, combineReducers } from "redux";
import { playersReducer, gameReducer, timerReducer } from "./reducers";

const rootReducer = combineReducers({
  players: playersReducer,
  game: gameReducer,
  timer: timerReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());