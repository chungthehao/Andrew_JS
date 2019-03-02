let name = '   Henry Chung     '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = '123abcfdffd098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

/**
 * Challenge area
 * 
 * isValidPassword
 * length is more than 8 - it doesn't contain the word 'password'
 */
let isValidPassword = function (password) {
    return ! (password.length < 8 || password.includes('password'))
}   

console.log(isValidPassword('12345'))
console.log(isValidPassword('123abc*&^%$#@'))
console.log(isValidPassword('dsjhsdjhdsdpasswordsahjdjsdh'))