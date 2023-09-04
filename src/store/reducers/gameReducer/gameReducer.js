import { checkDraw, checkWin } from "../../../utils";
import { RESET_GAME, SET_FIGURE } from "./actions/gameActionNames";

const initialState = {
  fields: ["", "", "", "", "", "", "", "", ""],
  currentFigure: 'X',
  isGameEnded: false,
  isDraw: false
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_GAME:
      return initialState
    case SET_FIGURE:
      if (state.isGameEnded) return state;
      if (state.fields[action.payload]) {
        return state
      } else {
        let updatedFields = [...state.fields];
        updatedFields[action.payload] = state.currentFigure;
        let nextPlayer = state.currentFigure === 'X' ? 'O' : 'X'

        if (checkWin(updatedFields, state.currentFigure)) {
          return { ...state, fields: updatedFields, isGameEnded: true }
        }

        if (checkDraw(updatedFields)) {
          return { ...state, fields: updatedFields, isDraw: true }
        }

        return { ...state, fields: updatedFields, currentFigure: nextPlayer }
      }

    default:
      return state
  }
}

