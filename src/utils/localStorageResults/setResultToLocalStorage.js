export const setResultToLocalStorage = (result) => {
  return localStorage.setItem('gameHistory', JSON.stringify(
        result
  ))
}