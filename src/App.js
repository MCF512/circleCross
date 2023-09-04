import { Board, Info, PlayersForm, Timer, Button, GameHistory } from './components';
import { useDispatch } from 'react-redux';
import { RESET_GAME, SHOW_PLAYERS_FORM, RESET_TIMER } from './store';

export const App = () => {
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(
      { type: RESET_TIMER }
    )
    dispatch(
      { type: RESET_GAME }
    )
  }

  const showPlayersForm = () => {
    dispatch(
      { type: SHOW_PLAYERS_FORM }
    )
  }

  return (
    <div className="
      h-screen
      w-full
      flex
      items-center
      justify-center
      ">
      <PlayersForm />

      <div className="
      flex
      items-end
      justify-between
      w-full
      ">
        <div className="wrapper justify-self-center">
          <Timer />

          <Info />
          <Board />

          <div className="flex justify-between mb-5">
            <Button onClick={handleReset}>Начать заново</Button>
            <Button onClick={showPlayersForm}>Сменить игроков</Button>
          </div>
        </div>
      </div>
      <GameHistory />
    </div>
  )
}
