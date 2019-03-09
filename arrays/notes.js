// const notes = ['Note 1', 'Note 2', 'Note 3']

/* from the end */
// console.log(notes.pop()) // remove item and return value
// notes.push('My new note') // add item

/* from the start */
// console.log(notes.shift()) // remove item and return value
// notes.unshift('My first note') // add item

/* in middle */
// notes.splice(1, 1) // start ở index 1, remove 1 item 
// notes.splice(1, 0, 'This is the new second item') // add new item in index 1
// notes.splice(1, 1, 'This is the new second item') // replace the second

/* use bracket notation */
// notes[2] = 'This is now the new note 3' // replace the third

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

// console.log(notes)
// console.log(notes.length)
// console.log(notes[0])
// console.log(notes[notes.length - 1]) // the last item
// console.log(notes[9999999999999]) // undefined

// Counting... 1
// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// }

/**
 * Tuong duong forEach
 */
// for (let count = 0; count < notes.length; count++) {
//     console.log(count, notes[count])
// }

/**
 * Reverse
 */
// for (let count = notes.length-1; count >= 0; count--) {
//     console.log(count, notes[count])
// }

// console.log(notes.indexOf('Note 2'))

//------------------------------------------------------

let notes = [/* {}, */ {
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// console.log('a' > 'b') // so sanh 2 string la so sanh thu tu alphabetically
// console.log('March' < 'January') // so sanh M voi J
// console.log('a' < 'A') // HOA hay thuong la quan trong (ma ASCII)

const sortNotes = function (notes) {
    // sort method gets called with 2 individual items
    notes.sort(function (note1, note2) {
        // if note1 should come first -> return -1
        // if note1 should come after -> return +1 
        // both of them don't have their order changed -> return 0
        if (note1.title.toLowerCase() < note2.title.toLowerCase()) {
            return -1
        } else if (note1.title.toLowerCase() > note2.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}
sortNotes(notes)
console.log(notes)

// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

// const findNotes = function (notes, search) {
//     return notes.filter(function (note) {
//         const isTitleMatch = note.title.toLowerCase().includes(search.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(search.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     })
// }

// console.log(findNotes(notes, 'eating'))

/**
 * filter method
 */
// const filteredNotes = notes.filter(function (note, index) {
//     // return false // tra ve 1 mang rong
//     // return true // copy ra 1 mang moi
//     const isTitleMatch = note.title.toLowerCase().includes('office')
//     const isBodyMatch = note.body.toLowerCase().includes('office')
//     console.log(isTitleMatch, isBodyMatch)
//     return isTitleMatch || isBodyMatch
// })
// console.log(filteredNotes)

/**
 * Viet findNote func dua vao findIndex method
 */
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'some other office modification')
// console.log(note)

// console.log(notes)

/**
 * indexOf method
 */
// console.log(notes.indexOf({})) // KHONG THE DUNG 'indexOf' de search obj trong 1 array dc ---> Dung findIndex

// console.log({} === {}) // false, vi 2 thang co dia chi memory khac nhau (ko lien quan ve gia tri, properties... ma xet ve memory co la 1?)

// let someObj = {} 
// let otherObj = someObj
// console.log(someObj === otherObj) // true, vi 2 thang co cung memory, cung la 1 thang

/**
 * findIndex method
 */
// - Callback func gets called one time for each item in the array.
// - Toi item nao no tim thay khop (match) thi stop lien.
// const index = notes.findIndex(function (note, index) { 
//     console.log(index, note)
//     return note.title === 'Habbits to work on' // the search criteria
// })
// console.log(index)