import st from './Board.module.css'
import { store } from '../../store/store'

export const Board = ({ fields, onClick }) => {
  const state = store.getState();

  return (
    <div className={st.board}>
      {state.fields.map((field, index) => {
        return <button className={st.cell} key={index} onClick={() => onClick(index)}>
          {field}
        </button>
      })}
    </div>
  )
} 