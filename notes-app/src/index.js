import { getNotes, createNote, removeNote, updateNote } from './notes'
import { getFilters, setFilters } from './filters'

// console.log(getNotes())
// createNote()
// removeNote('456f870d-6ad0-456e-aff6-7bfc58032b84')
// debugger
// updateNote('7affa570-c1ea-47a4-85f5-c06382512624', {
//     title: '  title 6                             ',
//     body: ' body 6'
// })

// let i = 0
// let now = new Date().getSeconds()
// while (i === 0) {
//     if (new Date().getSeconds() - now > 2) {
//         i = 1
//     }
// }

// console.log(getNotes())

console.log(getFilters())
setFilters({
    searchText: 'Office',
    sortBy: 'byCreated'
})
console.log(getFilters())