import { WINS } from "../constants"

export const checkWin = (fields, currentPlayer) => {
  return WINS.some((winComb) =>
    winComb.every((ind) => fields[ind] === currentPlayer)
  )
}

export const checkDraw = (fields) => {
  return fields.every((field) => field)
}