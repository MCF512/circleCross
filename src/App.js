import { useState } from 'react';
import st from './App.module.css';
import { field as initialFields } from './constants/field';
import { Board } from './components/Board/Board';

function App() {

  const [fields, setFields] = useState(initialFields);
  const [XO, setXO] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);

  const handleReset = () => {
    console.log(initialFields)
    setFields(initialFields)
    setIsGameEnded(false)
    setXO('X')
  }


  return (
    <div>
      <Board
        fields={fields}
        XO={XO}
        setXO={setXO}
        setFields={setFields}
      />

      <button onClick={handleReset}>Начать заново</button>
    </div>
  )
}

export default App;
