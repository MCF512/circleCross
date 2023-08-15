import st from './Board.module.css';
import { useSelector } from 'react-redux';

export const Board = ({ onClick }) => {
  const fields = useSelector((state) => state.fields)

  return (
    <div className={st.board}>
      {fields.map((field, index) => {
        return <button className={st.cell} key={index} onClick={() => onClick(index)}>
          {field}
        </button>
      })}
    </div>
  )
} 