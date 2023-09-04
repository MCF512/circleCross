export const Cell = ({ onClick, disabled, children }) => {
  return (
    <button className="
      cell
      border-2
      border-green-400
      rounded
      p-0
      m-0
      text-green-400
      text-8xl
      flex
      items-center
      justify-center
      leading-none
      bg-transparent
      transition-all
      delay-100
      hover:bg-gray-100
      "
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}