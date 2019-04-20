class Hangman {
    constructor(word, remainingGuesses) {
        this.status = 'playing'
        this.word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
    }

    getPuzzle() {
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

    makeGuess(character) {
        // Failed hay Finished rồi thì dừng
        if (this.status !== 'playing') return;

        const char = character.toLowerCase()

        // Nếu đoán chữ đã đoán rồi thì dừng
        if (this.guessedLetters.includes(char)) return;
        
        // Cập nhật những chữ cái người chơi đã đoán
        this.guessedLetters.push(char)
        
        // Nếu chữ cái ng chơi đoán ko nằm trong chữ thì giảm lượt đoán
        if ( ! this.word.includes(char)) 
            this.remainingGuesses--

        this.recalculatingStatus()
    }

    recalculatingStatus() {
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
            return;
        }
    
        /**
         * * Cách 3: Dùng every
         * - Nếu tất cả match trả về true
         * - Có bất kỳ cái nào ko match trả về false
         */
        const isFinished = this.word.every(letter => this.guessedLetters.includes(letter))
        if (isFinished) {
            this.status = 'finished'
            return;
        }
    
        // Chưa failed mà cũng chưa finished thì là đang chơi
        this.status = 'playing'
    }

    getStatusMessage() {
        if (this.status === 'playing') 
            return `Guesses left: ${this.remainingGuesses}.`
        else if (this.status === 'failed')
            return `Nice try! The word was "${this.word.join('')}".`
        
        return 'Great work! You guessed the word.'
    }
}



/**
 * ~ Hangman constructor function ~
 */
// const Hangman = function (word, remainingGuesses) {
//     this.status = 'playing'
//     this.word = word.toLowerCase().split('')
//     this.guessedLetters = []
//     this.remainingGuesses = remainingGuesses
// }

// Hangman.prototype.getPuzzle = function () {
//     let puzzle = ''
//     this.word.forEach(letter => {
//         if (letter === ' ') {
//             puzzle += ' '
//         } else if (this.guessedLetters.includes(letter)) {
//             puzzle += letter
//         } else {
//             puzzle += '*'
//         }
//     })
//     return puzzle
// }

// Hangman.prototype.makeGuess = function (character) {
//     // Failed hay Finished rồi thì dừng
//     if (this.status !== 'playing') return;

//     const char = character.toLowerCase()

//     // Nếu đoán chữ đã đoán rồi thì dừng
//     if (this.guessedLetters.includes(char)) return;
    
//     // Cập nhật những chữ cái người chơi đã đoán
//     this.guessedLetters.push(char)
    
//     // Nếu chữ cái ng chơi đoán ko nằm trong chữ thì giảm lượt đoán
//     if ( ! this.word.includes(char)) 
//         this.remainingGuesses--

//     this.recalculatingStatus()
// }

// Hangman.prototype.recalculatingStatus = function () {
//     if (this.remainingGuesses === 0) {
//         this.status = 'failed'
//         return;
//     }

//     /**
//      * * Cách 3: Dùng every
//      * - Nếu tất cả match trả về true
//      * - Có bất kỳ cái nào ko match trả về false
//      */
//     const isFinished = this.word.every(letter => this.guessedLetters.includes(letter))
//     if (isFinished) {
//         this.status = 'finished'
//         return;
//     }
        
//     /**
//      * * Cách 2
//      * Lọc ra những chữ cái trong chữ mà chưa đc đoán, nếu ko có tức là đã xong
//      */
//     // const lettersUnguessed = this.word.filter(letter => {
//     //     return ! this.guessedLetters.includes(letter)
//     // })
//     // if (lettersUnguessed.length === 0) {
//     //     this.status = 'finished'
//     //     return;
//     // }

//     /**
//      * * Cách 1
//      * Nếu tất cả các từ trong this.word đều nằm trong this.guessedLetters thì thành công r
//      */
//     // let isFinished = true
//     // this.word.forEach(char => {
//     //     if ( ! this.guessedLetters.includes(char)) {
//     //         isFinished = false
//     //     }
//     // })

//     // if (isFinished) {
//     //     this.status = 'finished'
//     //     return;
//     // }

//     // Chưa failed mà cũng chưa finished thì là đang chơi
//     this.status = 'playing'
// }

// Hangman.prototype.getStatusMessage = function () {
//     if (this.status === 'playing') 
//         return `Guesses left: ${this.remainingGuesses}.`
//     else if (this.status === 'failed')
//         return `Nice try! The word was "${this.word.join('')}".`
    
//     return 'Great work! You guessed the word.'
// }


























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