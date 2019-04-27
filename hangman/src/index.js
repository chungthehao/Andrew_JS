import Hangman from './hangman'
import getPuzzle from './requests'

const render = () => {
    puzzleEle.innerHTML = ''
    remainingGuessesEle.textContent = game1.statusMessage

    puzzleEle.innerHTML = game1.puzzle.split('').map(letter => `<span>${letter}</span>`).join('')
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

const puzzleEle = document.querySelector('#puzzle')
const remainingGuessesEle = document.querySelector('#remaining-guesses')

let game1

window.addEventListener('keypress', (e) => {
    const character = String.fromCharCode(e.charCode)
    game1.makeGuess(character)
    render()
})

document.querySelector('#reset').addEventListener('click', startGame)

startGame()