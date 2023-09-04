export const getResultsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('gameHistory'))
}
