import st from './Board.module.css'

export const Board = ({ fields, onClick }) => {

  return (
    <div className={st.board}>
      {fields.map((field, index) => {
        return <button className={st.cell} key={index} onClick={(e) => onClick(e, index)}>
          {field}
        </button>
      })}
    </div>
  )
} 