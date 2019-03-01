let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (bookObj) { // Truyền 1 object vô function
    // trả về 1 object từ function
    return {
        summary: `${bookObj.title} by ${bookObj.author}.`,
        pageCountSummary: `${bookObj.title} is ${bookObj.pageCount} pages long.`
    }

    // console.log(`${bookObj.title} by ${bookObj.author}.`)
}

console.log(getSummary(myBook).summary)
console.log(getSummary(otherBook).pageCountSummary)

/**
 * Challenge area
 * Create function - take fahrenheit in - return object with all three
 */
let getTemp = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

let temps = getTemp(74)
console.log(temps)