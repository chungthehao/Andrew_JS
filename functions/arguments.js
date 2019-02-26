/**
 * Multiple arguments
 */
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)

console.log(result)

/**
 * Default arguments
 */
let getScoreText = function (name = 'Anonymous', score = 0) {
    // console.log(name, score)
    return 'Name: ' + name + ' - Score: ' + score 
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// getScoreText()              // Anonymous 0
// getScoreText('Henry', 100)  // Henry 100
// getScoreText('John')        // John 0
// getScoreText(undefined, 50) // Anonymous 50

/**
 * Challenge area
 * total, tipPercent .2
 */
let getTip = function (total, tipPercent = .2) {
    // return total * tipPercent

    // A 25% tip on $40 would be $10.
    return `A ${tipPercent * 100}% tip on $${total} would be $${tipPercent * total}.`
}

let tip1 = getTip(100)
let tip2 = getTip(200, .3)

console.log(tip1, tip2)