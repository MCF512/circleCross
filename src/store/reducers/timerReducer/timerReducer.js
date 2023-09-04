import { INCREASE_TIME, RESET_TIMER, START_TIMER, STOP_TIMER } from "./actions/timerActionsNames"

const initialState = {
  timerStarted: false,
  currentTimeOfGame: 0,
}

export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER: {
      return { ...state, timerStarted: true }
    }
    case STOP_TIMER: {
      return { ...state, timerStarted: false }
    }
    case INCREASE_TIME: {
      return { ...state, currentTimeOfGame: state.currentTimeOfGame + 1 }
    }
    case RESET_TIMER: {
      return initialState
    }
    default:
      return state
  }
}