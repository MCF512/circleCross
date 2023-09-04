import { ResultBlock } from "./components";
import { useSelector } from "react-redux";
import { getResultsFromLocalStorage, resetResultsFromLocalStorage } from "../../utils";
import { useEffect, useState } from "react";
import { Button } from "../UI/Button/Button";

export const GameHistory = () => {
  const isGameEnded = useSelector((state) => state.game.isGameEnded);
  const isDraw = useSelector((state) => state.game.isDraw);
  const [results, setResults] = useState(getResultsFromLocalStorage())

  useEffect(() => {
    setResults(() => getResultsFromLocalStorage())
  }, [isGameEnded, isDraw]);

  const resetResults = () => {
    resetResultsFromLocalStorage()
    setResults(() => getResultsFromLocalStorage())
  }

  return (
    <div className="
      absolute
      right-20
      top-1/2
      -translate-y-1/2
      h-1/2
      w-1/5
    ">
      <div className="
      border-2
      border-green-400
      rounded
      flex
      flex-col
      mb-5
      h-full
      overflow-y-scroll
      scrollbar
      ">
        <div className="
        flex
        items-center
        justify-between
        text-green-400
        text-xl
        p-2
        border-b-2
        border-green-400
        ">
          <div>Игроки</div>
          <div>Результат</div>
        </div>
        {results ? results.map((result) => {
          return (
            <ResultBlock result={result} />
          )
        })
          :
          <div className="
          text-lg
          text-center
          text-green-400
          p-2
        ">
            Тут пока пусто... Время сыграть!
          </div>}
      </div>
      <Button onClick={resetResults}>Сбросить результаты</Button>
    </div>
  )
}
