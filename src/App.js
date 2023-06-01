import { useState } from 'react';
import './App.css';
import { Cell } from './components/Cell/Cell';

function App() {

  const cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const winConditions = [
    '123',
    '456',
    '789',
    '147',
    '258',
    '369',
    '159',
    '357'
  ]

  let [step, setStep] = useState(0);
  let [circles, setCircles] = useState([]);
  let [cross, setCross] = useState([]);

  const checkForWin = (player) => {
    // console.log(player)
    let joined = player.sort((a, b) => {
      return +a - +b
    }).join('')
    console.log(joined)
    for (let cond of winConditions) {
      if (joined.includes(cond)) {
        alert('win')
      }
    }
  }


  const handleClick = (e) => {
    setStep(step + 1);

    if (circles.includes(e.target.value) || cross.includes(e.target.value)) {
      return
    }

    if (step % 2) {
      let updateCircles = [...circles, e.target.value]
      setCircles(updateCircles)
      console.log('circles')
      checkForWin(circles)
      // console.log("ход игрока 2")
    } else {
      let updateCross = [...cross, e.target.value]
      setCross(updateCross)
      console.log('cross')
      checkForWin(cross)
      // console.log(e.target.value)
    }
  }

  return (
    <div className="App">
      {cells.map(item => {
        return (
          <Cell key={item} id={item} onClick={(e) => handleClick(e)} />
        )
      })}
    </div>
  );
}

export default App;
