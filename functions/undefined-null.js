/**
 * Undefined for variable
 */
let name

// name = 'Henry'

if (name === undefined) {
    console.log('Please provide a name.')
} else {
    console.log(name)
}

/**
 * Undefined for function arguments
 */
let square = function (num) {
    console.log(num)
}

square()

/**
 * Undefined khi function không return gì cả.
 */
let result = square(6)
console.log(result)

/**
 * null keyword (explicitly cleared by the developer)
 */
let age = 27
console.log(age)
age = null
console.log(age)