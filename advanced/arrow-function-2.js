/**
 * Sẽ bị báo lỗi
 */
// const add = () => {
//     return arguments[0] + arguments[1]
// }

/**
 * 'arguments' chỉ tồn tại trong function thường (ko phải arrow func)
 */
// const add = function () {
//     // console.log(arguments) // add(11, 22, 33, 44) ---> { '0': 11, '1': 22, '2': 33, '3': 44 }
//     return arguments[0] + arguments[1]
// }

// console.log(add(11, 22, 33, 44))

//-------------------------------------------------------------------

// const car = {
//     color: 'red',
//     getSummary: function () {
//         return `The car is ${this.color}` // The car is red
//     }
// }

/**
 * 'this' trong trường hợp này là object trên 1 cấp nữa 
 * (nếu chạy trong browser sẽ là 'window' object)
 */
// const car = {
//     color: 'red',
//     getSummary: () => {
//         return `The car is ${this.color}` // The car is undefined
//     }
// }

const car = {
    color: 'red',
    getSummary() {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())

