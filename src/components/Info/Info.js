import st from './Info.module.css';
import { store } from '../../store/store';

export const Info = () => {
  const state = store.getState();

  return (
    <div className={st.info}>
      {state.isDraw ? 'Ничья' : state.isGameEnded ? `Победа ${state.currentPlayer}` : `Ход ${state.currentPlayer}`}
    </div>
  )
}