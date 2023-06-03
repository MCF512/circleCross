import st from './Info.module.css'

export const Info = ({ isDraw, isGameEnded, XO }) => {

  return (
    <div className={st.info}>
      {isDraw ? 'Ничья' : isGameEnded ? `Победа ${XO}` : `Ход ${XO}`}
    </div>
  )
}