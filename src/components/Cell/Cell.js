import st from './Cell.module.css'

export const Cell = ({ id, onClick }) => {
  return (
    <button onClick={onClick} value={id} className={st.cell}>
      {id}
    </button>
  )
}