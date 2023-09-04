import { setResultToLocalStorage } from "../index";

export const saveResultToLocalStorage = (newGameResult) => {
  const resultsFromLocalStorage = localStorage.getItem('gameHistory');
  if (!resultsFromLocalStorage) {
    setResultToLocalStorage([newGameResult])
  } else {
    const parsedResults = JSON.parse(resultsFromLocalStorage);
    setResultToLocalStorage([...parsedResults, newGameResult])
  }
} 