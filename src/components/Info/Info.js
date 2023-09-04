import { useSelector } from 'react-redux';
export const Info = () => {
  const isDraw = useSelector((state) => state.game.isDraw);
  const isGameEnded = useSelector((state) => state.game.isGameEnded);
  const currentPlayer = useSelector((state) => state.players.currentPlayer);
  return (
    <div className="text-3xl text-center text-green-500 mb-5  font-bold">
      {isDraw ? 'Ничья' : isGameEnded ? `Победил(-а) ${currentPlayer}` : !currentPlayer ? 'Введите имена игроков' : `Ходит ${currentPlayer}`}
    </div>
  )
}