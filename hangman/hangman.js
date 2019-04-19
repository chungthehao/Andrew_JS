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

Hangman.prototype.makeGuess = function (character) {
    // Nếu hết lượt hoặc đoán nhiều chữ cái thì dừng
    if (this.remainingGuesses === 0 || character.length > 1) return;

    const char = character.toLowerCase()

    // Nếu đoán chữ đã đoán rồi thì dừng
    if (this.guessedLetters.includes(char)) return;
    
    // Cập nhật những chữ cái người chơi đã đoán
    this.guessedLetters.push(char)
    
    // Nếu chữ cái ng chơi đoán ko nằm trong chữ thì giảm lượt đoán
    if ( ! this.word.includes(char)) 
        this.remainingGuesses--

    return;
}

const game1 = new Hangman('cat', 2)
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

window.addEventListener('keypress', function (e) {
    const character = String.fromCharCode(e.charCode)
    
    game1.makeGuess(character)

    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
})


// const game2 = new Hangman('Three Cats', 5)
// game2.makeGuess('t')
// game2.makeGuess('t')
// game2.makeGuess('t')
// game2.makeGuess('e')
// game2.makeGuess('w')
// game2.makeGuess('w')
// game2.makeGuess('w')
// game2.makeGuess('w')
// console.log(game2.getPuzzle())
// console.log(game2.remainingGuesses)