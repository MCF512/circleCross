import st from './App.module.css';
import { Board } from './components/Board/Board';
import { Info } from './components/Info/Info';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(
      { type: 'RESET_GAME' }
    )
  }

  const handleClick = (index) => {
    dispatch(
      { type: 'SET_PLAYER', payload: index }
    )
  }

  return (
    <div className={st.inner}>
      <div className={st.wrapper}>
        <Info />
        <Board
          onClick={handleClick}
        />

        <button className={st.reset} onClick={handleReset}>Начать заново</button>
      </div>
    </div>
  )
}

export default App;
