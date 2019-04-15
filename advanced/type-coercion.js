const value = true + 12
const type = typeof value
console.log(value, type) // 13 'number'

/**
 * Type Coercion - a string, a number, a boolean (chỉ nên xài cái này - truthy, falsy)
 */

// # 55 (concatenate) or 10 (add) ??
// console.log('5' + 5) // 55

// console.log('5' - 5) // 0

// console.log(5 === 5) // true

// console.log(5 == '5') // true, '==' check for equality but it does not take TYPE into account

// console.log(5 === '5') // false

/**
 * typeof operator
 */
// const type = typeof 123 // number
// const type = typeof {} // object
// console.log(type)