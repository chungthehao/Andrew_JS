/**
 * Prototypal Inheritance
 */
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
// method này được dùng chung cho tất cả các instance của Person
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach(like => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}
Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}
// Property này được dùng chung cho tất cả các instance của Person
// Person.prototype.location = 'HoChiMinh'

const me = new Person('Henry', 'Chung', 27, ['Swimming', 'Walking', 'Eating'])
me.setName('Hao Chung')

/**
 * Tìm thấy property / method nào ở cấp thấp thì xài cái đó, ko chain tiếp lên cấp cao để tìm!
 */
me.getBio = function () {
    return 'getBio() của me instance!'
}

console.log(me.getBio())

const person2 = new Person('Clancey', 'Turner', 51, [])

/**
 * Object 'Person.prototype' này thay đổi gì thì sẽ phản ánh cho tất cả các instance khi tụi nó "chain tới".
 */
// Person.prototype.getBio = function () {
//     return 'Just test!'
// }

console.log(person2.getBio())


/**
 * Tùy biến property của obj (xào nấu obj "rỗng" đó)
 * (Giá trị truyền vào, dynamic)
 * person -> Person (convention về constructor function thôi)
 */
// const Person = function (firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age

//     // return this // ko cần, 'new' đã làm ngầm
//     // return {} // Trả về 1 obj rỗng, vô nghĩa
// }

// const me = new Person('Henry', 'Chung', 27)

// me.firstName = 'Ma Lau'
// console.log(me)
// console.log(me.age)

// const person2 = new Person('Clancey', 'Turner', 51)
// console.log(person2)

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