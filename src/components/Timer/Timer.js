import { useDispatch, useSelector } from "react-redux"
import { INCREASE_TIME, STOP_TIMER } from "../../store";
import { useEffect, useRef } from "react";

export const Timer = () => {
  const dispatch = useDispatch();
  const timerStarted = useSelector((state) => state.timer.timerStarted);
  const currentTimeOfGame = useSelector((state) => state.timer.currentTimeOfGame);
  const isGameEnded = useSelector((state) => state.game.isGameEnded);
  const isDraw = useSelector((state) => state.game.isDraw);

  useEffect(() => {
    if (isGameEnded || isDraw) {
      dispatch({ type: STOP_TIMER })
    }
  }, [isGameEnded]);

  let timeout = useRef(null);

  if (timerStarted) {
    timeout.current = setTimeout(dispatch, 1000, { type: INCREASE_TIME });
  } else {
    clearTimeout(timeout.current)
  }

  const minutes = Math.floor(currentTimeOfGame / 60);
  const seconds = Math.round(currentTimeOfGame - minutes * 60);

  const stringMinutes = minutes.toString().padStart(2, '0');
  const stringSeconds = seconds.toString().padStart(2, '0');
  return (
    <div className="text-center text-green-500 font-bold text-5xl mb-3">
      {`${stringMinutes}:${stringSeconds}`}
    </div>
  )
}