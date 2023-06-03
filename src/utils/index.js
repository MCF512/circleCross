import { WINS } from "../constants"

export const checkWin = (fields, currentPlayer) => {
  return WINS.some((winComb) => {
    winComb.every((ind) => fields[ind] == currentPlayer)
  })
}