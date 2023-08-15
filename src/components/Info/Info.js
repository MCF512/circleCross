import st from './Info.module.css';
import { useSelector } from 'react-redux';

export const Info = () => {
  const state = useSelector((state) => state)

  return (
    <div className={st.info}>
      {state.isDraw ? 'Ничья' : state.isGameEnded ? `Победа ${state.currentPlayer}` : `Ход ${state.currentPlayer}`}
    </div>
  )
}