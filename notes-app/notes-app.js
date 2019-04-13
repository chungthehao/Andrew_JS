let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters) // chạy lần đầu, initialize

document.querySelector('#create-note').addEventListener('click', function (e) {
    // update a new note to notes array
    const noteId = uuidv4()
    notes.push({
        id: noteId,
        title: '',
        body: ''
    })
    // save data into local storage
    saveNotes(notes)
    // Redirect to edit page
    location.assign(`/edit.html#${noteId}`)
})

// document.querySelector('#search-text').addEventListener('change', function (e) {
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value // Update searchText khi ng dùng gõ search
    renderNotes(notes, filters) // render lại nội dung phù hợp với searchText mới
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

/**
 * Global event
 * Notice:  Remember that the storage event does not fire 
 *          for the page that actually changed local storage.
 */
window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})



















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

// document.querySelector('#remove-all').addEventListener('click', function () {
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove()
//     })
// })

// document.querySelector('#name-form').addEventListener('submit', function (e) {
//     e.preventDefault(); // Mặc định thì form sẽ reload lại trang khi bấm button hoặc nhấp enter, rồi thêm param lên trên URL

//     console.log(e.target.elements.firstName.value) // e.target.elements.firstName: chính là JS obj đại diện cho cái input đó
//     e.target.elements.firstName.value = '' // Xóa nội dung thẻ input firstName đi sau khi in ra console
// })

/**
 * Local storage
 */
// - Create
// localStorage.setItem('location', 'HoChiMinh')
// - Read
// console.log(localStorage.getItem('location'))
// - Update (giống với create)
// - Delete
// localStorage.removeItem('location')
// - Delete all
// localStorage.clear()


// const user = {
//     name: 'Henry',
//     age: 27
// }
// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(user)
// console.log(user.name)
// console.log(user.age)