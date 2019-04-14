const square = (num) => num * num
// const squareLong = (num) => {
//     return num * num
// }

console.log(square(6))

const people = [
    { name: 'Henry', age: 27 },
    { name: 'Andrew', age: 28 },
    { name: 'Vikram', age: 31 },
    { name: 'Jess', age: 23 },
]

const under30 = people.filter(person => person.age < 30)
console.log(under30)

const person23 = people.find(person => person.age === 23)
console.log(person23.name)