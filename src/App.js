import { useState } from 'react';
import st from './App.module.css';
import { field as initialFields } from './constants/field';
import { Board } from './components/Board/Board';
import { Info } from './components/Info/Info';
import { checkWin, checkDraw } from './utils/index'

function App() {

  const [fields, setFields] = useState(initialFields);
  const [XO, setXO] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const handleReset = () => {
    setFields(initialFields)
    setIsGameEnded(false)
    setIsDraw(false)
    setXO('X')
  }

  const handleClick = (e, ind) => {
    if (isGameEnded) return;

    if (fields[ind]) {
      return
    } else {
      let updatedFields = [...fields];
      updatedFields[ind] = XO;
      setFields(updatedFields)


      if (checkWin(updatedFields, XO)) {
        setIsGameEnded(true)
        return
      }

      if (checkDraw(updatedFields)) {
        setIsDraw(true)
        return
      }

      let updatedXO = XO == "X" ? "O" : "X"
      setXO(updatedXO)
    }
  }


  return (
    <div className={st.inner}>
      <div className={st.wrapper}>
        <Info
          isDraw={isDraw}
          isGameEnded={isGameEnded}
          XO={XO}
        />
        <Board
          fields={fields}
          onClick={handleClick}
        />

        <button className={st.reset} onClick={handleReset}>Начать заново</button>
      </div>
    </div>
  )
}

export default App;
