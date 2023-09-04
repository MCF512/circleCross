import { SET_PLAYERS_NAMES, CHANGE_CURRENT_PLAYER, HIDE_PLAYERS_FORM, SHOW_PLAYERS_FORM } from "./actions/playersActionsNames";

const initialState = {
  player1: '',
  player2: '',
  currentPlayer: '',
  isPlayersFormVisible: true
};

export const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYERS_NAMES: {
      return { ...state, ...action.payload, currentPlayer: action.payload.player1 }
    }
    case CHANGE_CURRENT_PLAYER: {
      let currentPlayer = state.currentPlayer;
      let changedPlayer = currentPlayer === state.player1
        ? state.player2
        : state.player1
      return { ...state, currentPlayer: changedPlayer }
    }
    case HIDE_PLAYERS_FORM: {
      return { ...state, isPlayersFormVisible: false }
    }
    case SHOW_PLAYERS_FORM: {
      return { ...state, isPlayersFormVisible: true }
    }
    default:
      return state;
  }
}