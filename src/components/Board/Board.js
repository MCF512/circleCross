import { checkWin } from '../../utils';
import st from './Board.module.css'

export const Board = ({ fields, XO, setXO, setFields, isGameEnded, setISGameEnded }) => {

  const handleClick = (ind) => {

    if (fields[ind]) {
      return
    } else {
      let updatedFields = fields;
      updatedFields[ind] = XO;
      setFields(updatedFields)


      let updatedXO = XO == 'X' ? 'O' : 'X'
      setXO(updatedXO)
    }
  }

  return (
    <div className={st.board}>
      {fields.map((field, index) => {
        return <button className={st.cell} key={index} onClick={() => handleClick(index)}>
          {field}
        </button>
      })}
    </div>
  )
} 