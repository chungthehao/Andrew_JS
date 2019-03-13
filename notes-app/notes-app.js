const notes = [{
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
// const ps = document.querySelectorAll('p')
// console.log(ps)
// ps.forEach(function (p) {
//     // p.remove()

//     // console.log(p.textContent) // read the value

//     p.textContent = '********' // write the value (change the text)
// })

// // Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from Javascript.'
// document.querySelector('body').appendChild(newParagraph)

//------------------------------------------------------------------------

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase()) // || note.body.toLowerCase().includes(filters.searchText)
    })

    document.querySelector('#notes').innerHTML = '' // Xóa cái cũ trước khi re-render cái list notes mới
    
    // console.log(filteredNotes)
    filteredNotes.forEach(function (note) {
        // Tạo element
        const p = document.createElement('p')
        // Insert nội dung
        p.textContent = note.title
        // Rendering
        document.querySelector('#notes').appendChild(p)
    })
}

renderNotes(notes, filters) // chạy lần đầu, initialize

document.querySelector('#create-note').addEventListener('click', function (e) {
    // console.log('Did this work?')
    // console.log(e)
    e.target.textContent = 'The button was clicked.'
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

// document.querySelector('#search-text').addEventListener('change', function (e) {
document.querySelector('#search-text').addEventListener('input', function (e) {
    // console.log(e.target.value)

    filters.searchText = e.target.value // Update searchText khi ng dùng gõ search
    renderNotes(notes, filters) // render lại nội dung phù hợp với searchText mới
})