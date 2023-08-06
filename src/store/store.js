import { createStore } from "redux";
import { checkDraw, checkWin } from "../utils";

const initialState = {
  fields: ["", "", "", "", "", "", "", "", ""],
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_GAME':
      return initialState
    case 'SET_PLAYER':
      if (state.isGameEnded) return state;
      if (state.fields[action.payload]) {
        return state
      } else {
        let updatedFields = [...state.fields];
        updatedFields[action.payload] = state.currentPlayer;
        let nextPlayer = state.currentPlayer == 'X' ? 'O' : 'X'

        if (checkWin(updatedFields, state.currentPlayer)) {
          return { ...state, fields: updatedFields, isGameEnded: true }
        }

        if (checkDraw(updatedFields)) {
          return { ...state, fields: updatedFields, isDraw: true }
        }

        console.log(state)
        return { ...state, fields: updatedFields, currentPlayer: nextPlayer }
      }
    default:
      return state
  }
}

export const store = createStore(appReducer, initialState);

