import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_CURRENT_PLAYER, SET_FIGURE, START_TIMER } from '../../store';
import { Cell } from './components';
import { saveResultToLocalStorage } from '../../utils';
import { useEffect } from 'react';

export const Board = () => {
  const dispatch = useDispatch();
  //Для избежания лишних рендеров каждый стейт отдельно
  const fields = useSelector((state) => state.game.fields);
  const isGameEnded = useSelector((state) => state.game.isGameEnded);
  const isDraw = useSelector((state) => state.game.isDraw);
  const currentPlayer = useSelector((state) => state.players.currentPlayer);
  const timerStarted = useSelector((state) => state.timer.timerStarted);
  const player1 = useSelector((state) => state.players.player1);
  const player2 = useSelector((state) => state.players.player2);

  useEffect(() => {
    if (isGameEnded || isDraw) {
      saveResultToLocalStorage({ player1, player2, playerWon: currentPlayer, isDraw })
    }
  }, [isGameEnded, isDraw])


  const handleClick = (index) => {
    if (!isGameEnded) {
      dispatch(
        { type: SET_FIGURE, payload: index }
      )
      dispatch(
        { type: CHANGE_CURRENT_PLAYER }
      )

      if (!timerStarted) {
        dispatch(
          { type: START_TIMER }
        )
      }
    }
  }

  return (
    <div className="flex flex-wrap mb-5 gap-1">
      {fields.map((field, index) => {
        return (
          <Cell
            key={index}
            onClick={() => handleClick(index)}
            disabled={!currentPlayer}
          >
            {field}
          </Cell>
        )
      })}
    </div>
  )
} 