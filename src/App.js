import { useEffect, useState } from 'react';
import st from './App.module.css';
import { Board } from './components/Board/Board';
import { Info } from './components/Info/Info';
import { store } from './store/store';

function App() {
  const [storeState, setStoreState] = useState(store.getState())

  useEffect(() => {
    store.subscribe(() => {
      setStoreState(() => store.getState())
    })
  }, [])

  const handleReset = () => {
    store.dispatch(
      { type: 'RESET_GAME' }
    )
  }


  const handleClick = (index) => {
    store.dispatch(
      { type: 'SET_PLAYER', payload: index }
    )
  }

  return (
    <div className={st.inner}>
      <div className={st.wrapper}>
        <Info/>
        <Board
          onClick={handleClick}
        />

        <button className={st.reset} onClick={handleReset}>Начать заново</button>
      </div>
    </div>
  )
}

export default App;
