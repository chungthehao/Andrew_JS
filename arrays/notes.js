const notes = ['Note 1', 'Note 2', 'Note 3']

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
notes[2] = 'This is now the new note 3' // replace the third

console.log(notes)
// console.log(notes.length)
// console.log(notes[0])
// console.log(notes[notes.length - 1]) // the last item
// console.log(notes[9999999999999]) // undefined