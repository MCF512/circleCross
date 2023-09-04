export const ResultBlock = ({ result }) => {
  const { player1, player2, playerWon, isDraw } = result;
  return (
    <div className="
    w-full
    flex
    items-center
    justify-between
    flex-row
    p-2
    border-b-2
    border-green-400
    text-green-400
    ">
      <div>{`${player1} против ${player2}`}</div>
      <div>{isDraw ? 'ничья' : `победил(-а) ${playerWon}`}</div>
    </div>
  )
}