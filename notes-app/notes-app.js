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