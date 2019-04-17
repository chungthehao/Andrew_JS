const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.remainingGuesses = remainingGuesses
}
Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach(letter => {
        if (letter === ' ') {
            puzzle += ' '
        } else if (this.guessedLetters.includes(letter)) {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

const game1 = new Hangman('cat', 2)
game1.guessedLetters = ['t']
console.log(game1.getPuzzle())

const game2 = new Hangman('Three Cats', 5)
game2.guessedLetters = ['e', 's']
console.log(game2.getPuzzle())