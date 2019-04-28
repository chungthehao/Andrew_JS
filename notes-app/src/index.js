import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'

renderNotes() // chạy lần đầu, initialize

document.querySelector('#create-note').addEventListener('click', e => {
    // create a new empty note to notes array
    const noteId = createNote()
    // Redirect to edit page
    location.assign(`/edit.html#${noteId}`)
})

document.querySelector('#search-text').addEventListener('input', e => {
    // Update searchText khi ng dùng gõ search
    setFilters({ searchText: e.target.value })
    renderNotes() // render lại nội dung phù hợp với searchText mới
})

document.querySelector('#filter-by').addEventListener('change', e => {
    setFilters({ sortBy: e.target.value })
    renderNotes()
})

/**
 * Global event
 * Notice:  Remember that the storage event does not fire 
 *          for the page that actually changed local storage.
 */
window.addEventListener('storage', e => {
    if (e.key === 'notes') 
        renderNotes()
})
