import { useEffect, useState } from 'react';
import st from './App.module.css';
import { field as initialFields } from './constants/field';
import { Board } from './components/Board/Board';
import { Info } from './components/Info/Info';
import { checkWin, checkDraw } from './utils/index'
import { store } from './store/store';

function App() {
  const [storeState, setStoreState] = useState(store.getState())
  let { fields, currentPlayer, isGameEnded, isDraw } = storeState;

  const handleReset = () => {
    store.dispatch(
      { type: 'RESET_GAME' }
    )
    store.subscribe(() => {
      console.log('store updated')
      setStoreState(() => store.getState())
    })
  }


  const handleClick = (index) => {
    store.dispatch(
      { type: 'SET_PLAYER', payload: index }
    )
    store.subscribe(() => {
      console.log('store updated')
      setStoreState(() => store.getState())
    })
  }

  return (
    <div className={st.inner}>
      <div className={st.wrapper}>
        <Info
          isDraw={isDraw}
          isGameEnded={isGameEnded}
          currentPlayer={currentPlayer}
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
