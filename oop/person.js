/**
 * Tùy biến property của obj (xào nấu obj "rỗng" đó)
 * (Giá trị truyền vào, dynamic)
 * person -> Person (convention về constructor function thôi)
 */
const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age

    // return this // ko cần, 'new' đã làm ngầm
    // return {} // Trả về 1 obj rỗng, vô nghĩa
}

const me = new Person('Henry', 'Chung', 27)

// me.firstName = 'Ma Lau'
console.log(me)
// console.log(me.age)

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2)

/**
 * Tùy biến property của obj (xào nấu obj "rỗng" đó)
 * (Giá trị static, ko dynamic)
 */
// const person = function () {
//     this.firstName = 'Henry'
// }

// const me = new person()

// console.log(me)

/**
 * 'new' --> tạo ra 1 obj rỗng, và trỏ 'this' trong function vào obj rỗng này. Rồi xào nấu obj này xong sẽ trả về obj này
 */
// const person = function () {
//     console.log(this)
// }

// const me = new person()

// console.log(me)

/**
 * Y như trước, chỉ thêm 'new' (Constructor function)
 * trả về --> person {} (custom object type, hiện tại chỉ là object rỗng)
 * The object type gets its name from the function
 */
// const person = function () {}

// const me = new person()

// console.log(me)

/**
 * Chỉ trả về undefined (do hàm chỉ rõ return gì, mặc định trả về undefined)
 */
// const person = function () {}

// const me = person()

// console.log(me)