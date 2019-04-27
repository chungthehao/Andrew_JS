'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters) // chạy lần đầu, initialize

document.querySelector('#create-note').addEventListener('click', e => {
    // update a new note to notes array
    const noteId = uuidv4()
    const nowTimestamp = moment().valueOf()
    notes.push({
        id: noteId,
        title: '',
        body: '',
        createdAt: nowTimestamp,
        updatedAt: nowTimestamp
    })
    // save data into local storage
    saveNotes(notes)
    // Redirect to edit page
    location.assign(`/edit.html#${noteId}`)
})

// document.querySelector('#search-text').addEventListener('change', function (e) {
document.querySelector('#search-text').addEventListener('input', e => {
    filters.searchText = e.target.value // Update searchText khi ng dùng gõ search
    renderNotes(notes, filters) // render lại nội dung phù hợp với searchText mới
})

document.querySelector('#filter-by').addEventListener('change', e => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

/**
 * Global event
 * Notice:  Remember that the storage event does not fire 
 *          for the page that actually changed local storage.
 */
window.addEventListener('storage', e => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})
