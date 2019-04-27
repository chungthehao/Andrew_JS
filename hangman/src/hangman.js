class Hangman {
    constructor(word, remainingGuesses) {
        this.status = 'playing'
        this.word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
    }

    get puzzle() {
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
        const isFinished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === ' ')
        if (isFinished) {
            this.status = 'finished'
            return;
        }
    
        // Chưa failed mà cũng chưa finished thì là đang chơi
        this.status = 'playing'
    }

    get statusMessage() {
        if (this.status === 'playing') 
            return `Guesses left: ${this.remainingGuesses}.`
        else if (this.status === 'failed')
            return `Nice try! The word was "${this.word.join('')}".`
        
        return 'Great work! You guessed the word.'
    }
}

export { Hangman as default }





