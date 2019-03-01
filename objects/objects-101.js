let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

// console.log(myBook)
// console.log(myBook.title)
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm' // Changing property value
console.log(`${myBook.title} by ${myBook.author}`)

/**
 * Challenge area
 */
// name, age, location
// Henry is 27 and lives in HoChiMinh.
// Increase age by 1 and print message again
let person = {
    name: 'Henry',
    age: 27,
    location: 'HoChiMinh'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age++

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)