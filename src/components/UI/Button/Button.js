export const Button = ({ onClick, children }) => {
  return (
    <button
      className="
      block 
      text-xl
      text-green-400
      px-8
      py-4
      border-2
      border-green-400
      rounded
      bg-transparent
      transition-all
      delay-100
      hover:bg-gray-100
      "
      onClick={onClick}>{children}</button>
  )
}