/**
 * Version 5
 */
const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    }
    throw Error('Argument must be a number') // This is going to include a lot more context about where things went wrong.
}

try {
    const tip = getTip(10)
    console.log(tip)
} catch (error) {
    console.log('Catch block is running')
}


/**
 * Version 4
 */
// const getTip = (amount) => {
//     if (typeof amount === 'number') {
//         return amount * .25
//     }
//     throw Error('Argument must be a number') // This is going to include a lot more context about where things went wrong.
// }

// const tip = getTip('a string, not a number') // Bị lỗi tè le, từ hàm getTip quăng ra
// console.log(tip)

/**
 * Version 3
 */
// const getTip = (amount) => {
//     if (typeof amount === 'number') {
//         return amount * .25
//     }
//     throw 'Argument must be a number' // Quăng lỗi ra, trả về kiểu string
// }

/**
 * Version 2
 */
// const getTip = (amount) => {
//     if (typeof amount === 'number') {
//         return amount * .25
//     }
//     return 'Tào lao!'
// }

/**
 * Version 1
 */
// const getTip = (amount) => {
//     return amount * .25
// }
