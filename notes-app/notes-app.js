let notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

/**
 * DOM - Document Object Model
 * 
 * - The HTML document is modeled using a javascript object and that object is called 'document'.
 * - This is not an object that we create.
 * - It's an object provided to us by the browser.
 */

 // * Query and remove the first element in the document
// const p = document.querySelector('p')
// // console.log(p)
// p.remove()

// * Query all and remove
const ps = document.querySelectorAll('p')
console.log(ps)
ps.forEach(function (p) {
    // p.remove()

    // console.log(p.textContent) // read the value

    p.textContent = '********' // write the value (change the text)
})

// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from Javascript.'
document.querySelector('body').appendChild(newParagraph)