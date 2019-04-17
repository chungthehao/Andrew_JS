/**
 * * Prototype chain
 * - product -> Object.prototype -> null (the chain ends)
 */
// const product = {
//     name: 'Influence'
// }

// const product = new Object() // <=> {} (literal syntax)
// product.name = 'Influence'

const product = new Object({
    name: 'Influence'
})

// hasOwnProperty: Check coi obj đó có property đó ko?
console.log(product.hasOwnProperty('name')) // true
console.log(product.hasOwnProperty('price')) // false
console.log(product.hasOwnProperty('hasOwnProperty')) // false, vì bản thân product ko có property này (chain lên mới có)

console.log(product)

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
Object.prototype.someNewMethod = function () {
    return 'Đây là 1 method tự định nghĩa!'
}
console.log(product.someNewMethod())