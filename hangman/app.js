const puzzleEle = document.querySelector('#puzzle')
const remainingGuessesEle = document.querySelector('#remaining-guesses')

const game1 = new Hangman('cat', 2)

puzzleEle.textContent = game1.getPuzzle()
remainingGuessesEle.textContent = game1.getStatusMessage()
console.log(game1.status)

window.addEventListener('keypress', function (e) {
    const character = String.fromCharCode(e.charCode)
    
    game1.makeGuess(character)

    puzzleEle.textContent = game1.getPuzzle()
    remainingGuessesEle.textContent = game1.getStatusMessage()
    console.log(game1.status)
})













/**
 * Primitive value: string, number, boolean, null, undefined
 */

/**
 * * Prototype chain
 * - Object: product --> Object.prototype --> null (the chain ends)
 * - Array: myArray --> Array.prototype --> Object.prototype --> null
 * - Function: myFunc --> Function.prototype --> Object.prototype --> null
 * - String: myString --> String.prototype --> Object.prototype --> null (It gets implicitly converted to an object behind the scenes by JavaScript)
 * - Number: myNumber --> Number.prototype --> Object.prototype --> null (It gets implicitly converted to an object behind the scenes by JavaScript)
 * - Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null (It gets implicitly converted to an object behind the scenes by JavaScript)
 */
// const product = 'computer'
// console.log(product) // string là primitive nên khi in ra mình đâu có thấy được prototype chain của nó
// console.log(product.split('')) // Khi access method thì mới chuyển string đó qua object (lúc đầu nó là primitive)

// const otherProduct = new String('mouse')
// console.log(otherProduct)

//======================================================

// const getScore = () => 1
// console.log(getScore)

//=========================================================

// Cách 1
// const team = ['Luke', 'Maddison']
// Cách khác
// const team = new Array('Luke', 'Maddison')
// console.log(team)
// console.log(team.hasOwnProperty('length'))

//===============================================================

// const product = {
//     name: 'Influence'
// }

// const product = new Object() // <=> {} (literal syntax)
// product.name = 'Influence'

// const product = new Object({
//     name: 'Influence'
// })

// hasOwnProperty: Check coi obj đó có property đó ko?
// console.log(product.hasOwnProperty('name')) // true
// console.log(product.hasOwnProperty('price')) // false
// console.log(product.hasOwnProperty('hasOwnProperty')) // false, vì bản thân product ko có property này (chain lên mới có)

// console.log(product)

/**
 * Override
 */
// Object.prototype.hasOwnProperty = function () {
//     return 'This is a new function!'
// }
// console.log(product.hasOwnProperty('test'))

/**
 * Add your own method
 */
// Object.prototype.someNewMethod = function () {
//     return 'Đây là 1 method tự định nghĩa!'
// }
// console.log(product.someNewMethod())