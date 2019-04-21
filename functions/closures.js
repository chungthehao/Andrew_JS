/**
 * * Tipper
 */
// const createTipper = (percent) => {
//     return (amount) => {
//         return amount * percent
//     }
// }

const createTipper = baseTip => amount => amount * baseTip

const tipper15 = createTipper(.15)
console.log(tipper15(100))
console.log(tipper15(150))

const tipper30 = createTipper(.3)
console.log(tipper30(100))
console.log(tipper30(75))



/**
 * Ví dụ 3
 */
// const createAdder = (a) => {
//     return (b) => {
//         return a + b
//     }
// }

// const add10 = createAdder(10)
// console.log(add10(2))
// console.log(add10(12))
// console.log(add10(-8))

// const add100 = createAdder(100)
// console.log(add100(2))
// console.log(add100(12))
// console.log(add100(-80))


/**
 * Ví dụ 2
 */
// const createCounter = () => {
//     let count = 0

//     return {
//         increment() {
//             count++
//         },
//         decrement() {
//             count--
//         },
//         get() {
//             return count
//         }
//     }
// }

// const counter = createCounter()
// console.log(counter.get())
// counter.increment()
// counter.increment()
// console.log(counter.get())
// counter.decrement()
// console.log(counter.get())



/**
 * Ví dụ 1
 */
// const myFunction = () => {
//     const message = 'This is my message'

//     const printMessage = () => {
//         console.log(message)
//     }
//     // printMessage()
//     return printMessage
// }

// const myPrintMessage = myFunction()
// myPrintMessage()