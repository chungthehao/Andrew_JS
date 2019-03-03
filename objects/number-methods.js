let num = 899.329

// console.log(num.toFixed(1)) // 899.3
// console.log(num.toFixed(2)) // 899.33
// console.log(num.toFixed(3)) // 899.329
// console.log(num.toFixed(4)) // 899.3290
// console.log(num.toFixed(0)) // 899

// console.log(Math.round(num)) // 899
// console.log(Math.floor(num)) // 899
// console.log(Math.ceil(num))  // 900

let min = 10
let max = 20
// Math.random() ----> 0 ~ 0.99999999999999999999999...
let randomNum = Math.floor(Math.random() * (max - min + 1) + min) // 10 ~ 20.999999999...
// console.log(randomNum)

/**
 * Challenge area
 * 
 * 1~5 - true if correct - false if not correct
 */
let makeGuess = function (guess) {
    const min = 1
    const max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum === guess
}
console.log(makeGuess(2))