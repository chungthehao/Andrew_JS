/**
 * * HTTP (Hypertext Transfer Protocol - Request Response Protocol)
 * - Request    - What do we want to do
 * - Response   - What was actually done 
 */

const puzzleEle = document.querySelector('#puzzle')
const remainingGuessesEle = document.querySelector('#remaining-guesses')

// const game1 = new Hangman('Car Parts', 2)
let game1

window.addEventListener('keypress', (e) => {
    const character = String.fromCharCode(e.charCode)
    game1.makeGuess(character)
    render()
})

const render = () => {
    puzzleEle.textContent = game1.puzzle
    remainingGuessesEle.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// ** Dùng FETCH
// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })
// ** PROMISE
// getPuzzle('2').then(
//     (puzzle) => {
//         console.log(puzzle)
//     },
//     (err) => {
//         console.log(`Error: ${err}`)
//     }
// )
// ** CALLBACK
// getPuzzle('2', (error, puzzle) => {
//     if (error) {
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(puzzle)
//     }
// })


// *** Chỉ với mục đích mô tả việc đợi cái này xong rồi mới làm tiếp cái khác (ko nên xài thực tế)
// const puzzle = getPuzzleSync()
// console.log(puzzle)

// console.log('DO SOMETHING ELSE!!!')

// ** FETCH
// const countryCode = 'CA'
// getCountry(countryCode).then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err)
// })
// ** PROMISE
// const countryCode = 'CA'
// getCountry(countryCode).then(
//     (country) => {
//         console.log(country.name)
//     },
//     (err) => {
//         console.log(err)
//     }
// )
// ** CALLBACK
// const countryCode = 'CA'
// getCountry(countryCode, (error, country) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(country.name)
//     }
// })


/**
 * FETCH API (1 cách mới thay cho XMLHttpRequest, có sẵn promise built in)
 * - Nhớ rằng fetch có param2 để làm gì đó
 * - Dùng fetch trả về 1 promise
 * - Khi xài fetch là nó care dùm mình cái chuyện là chắc chắn done rồi (readyState = 4), mình chỉ cần lo là nó 200 hay 404 này nọ thôi
 * - Trong then muốn dừng chạy và chạy code xử lý lỗi trong catch --> throw error
 */
// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         // **response.json() là trả về 1 promise, sẽ được resolve với 1 object data trong tương lai, 
//         // thay vì response.json().then() tiếp mình return cái promise này để then bên ngoài
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle!!')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })


/**
 * Making a HTTP request (Challenge)
 */
// const countryCode = 'CA'
// const req = new XMLHttpRequest()

// let count = 0
// req.addEventListener('readystatechange', e => {
//     console.log('Event fire: ' + ++count)
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const countries = JSON.parse(e.target.responseText)
//         const country = countries.find(country => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log('Something went wrong!')
//     }
// })

// req.open('GET', 'http://restcountries.eu/rest/v2/all')
// req.send()



/**
 * Primitive value: string, number, boolean, null, undefined
 */

/**
 * * Prototype chain
 * - Object: product --> Object.prototype --> null (the chain ends)
 * - Array: myArray --> Array.prototype --> Object.prototype --> null
 * - Function: myFunc --> Function.prototype --> Object.prototype --> null
 * - String: myString --> String.prototype --> Object.prototype --> null (It gets implicitly converted to an object behind the scenes by JavaScript)
 * - Number: myNumber --> Number.prototype --> Object.prototype --> null (It gets implicitly converted to an object behind the scenes by JavaScript)
 * - Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null (It gets implicitly converted to an object behind the scenes by JavaScript)
 */
// const product = 'computer'
// console.log(product) // string là primitive nên khi in ra mình đâu có thấy được prototype chain của nó
// console.log(product.split('')) // Khi access method thì mới chuyển string đó qua object (lúc đầu nó là primitive)

// const otherProduct = new String('mouse')
// console.log(otherProduct)

//======================================================

// const getScore = () => 1
// console.log(getScore)

//=========================================================

// Cách 1
// const team = ['Luke', 'Maddison']
// Cách khác
// const team = new Array('Luke', 'Maddison')
// console.log(team)
// console.log(team.hasOwnProperty('length'))

//===============================================================

// const product = {
//     name: 'Influence'
// }

// const product = new Object() // <=> {} (literal syntax)
// product.name = 'Influence'

// const product = new Object({
//     name: 'Influence'
// })

// hasOwnProperty: Check coi obj đó có property đó ko?
// console.log(product.hasOwnProperty('name')) // true
// console.log(product.hasOwnProperty('price')) // false
// console.log(product.hasOwnProperty('hasOwnProperty')) // false, vì bản thân product ko có property này (chain lên mới có)

// console.log(product)

/**
 * Override
 */
// Object.prototype.hasOwnProperty = function () {
//     return 'This is a new function!'
// }
// console.log(product.hasOwnProperty('test'))

/**
 * Add your own method
 */
// Object.prototype.someNewMethod = function () {
//     return 'Đây là 1 method tự định nghĩa!'
// }
// console.log(product.someNewMethod())


//==============================================================================
// *** CHALLENGE AREA ***

// getLocation().then(location => {
//     console.log(`You are currently in ${location.city} ${location.region} ${location.country}.`)
// }).catch(err => {
//     console.log(err)
// })


// * PROMISE CHAINING
// getLocation().then(location => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(`Your country name is ${country.name}.`)
// }).catch(err => {
//     console.log(err)
// })

// getCurrentCountry()
//     .then(country => console.log(country.name))
//     .catch(err => console.log(err.message))
