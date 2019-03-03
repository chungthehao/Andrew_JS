/**
 * Khai báo lại biến var đã khai báo (javascript cho, nguy hiểm! nếu tên biến đó đã xài vì nó ko báo lỗi)
 */
//var firstName = 'Henry'

//firstName = 'Ma Lau'

//var firstName = 'Lu Xuya' // it's perfectly fine. Javascript silently accepts
// console.log(firstName)

/**
 * var có scope là function, ko phải block
 */
// if (10 === 10) {
//     var firstName = 'Henry' // bên ngoài if block này, xài đc biến firstName trong này
//     // let firstName = 'Henry' // ReferenceError: firstName is not defined
// }

// const setName = function () {
//     // - Function này hình thành 1 scope
//     // - Bên ngoài func này, cho dù đã call func này, cũng ko có firstName
//     var firstName = 'Lu Xuya' // ReferenceError: firstName is not defined
// }

// setName()
// console.log(firstName)

/**
 * Accessing a variable before it's declared
 */
// let age
// var age
// console.log(age) // both undefined

// console.log(age)
// let age // ReferenceError: age is not defined
// var age // undefined
// var age = 10 // undefined

age = 10 // Vì trước khi chạy chương trình js đã đi qua 1 lượt để cấp phát bộ nhớ r, tới đây nó gán giá trị bình thường thôi.
console.log(age) // 10
var age