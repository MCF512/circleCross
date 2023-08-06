import st from './Info.module.css'

export const Info = ({ isDraw, isGameEnded, currentPlayer }) => {

  return (
    <div className={st.info}>
      {isDraw ? 'Ничья' : isGameEnded ? `Победа ${currentPlayer}` : `Ход ${currentPlayer}`}
    </div>
  )
}