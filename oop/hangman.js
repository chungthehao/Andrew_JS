const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('cat', 2)
const game2 = new Hangman('refrigerator', 5)

console.log(game1, game2)