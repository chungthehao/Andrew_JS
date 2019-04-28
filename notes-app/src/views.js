import moment from 'moment'

import { sortNotes, getNotes } from './notes'
import { getFilters } from './filters'

// Generate the last edited message
const getLastEditedMessage = timestamp => `Last edited ${moment(timestamp).fromNow()}`

// Render application notes
const renderNotes = () => {
    const notesEl = document.querySelector('#notes')

    const filters = getFilters()
    const notes = sortNotes(filters.sortBy) // Sort trước, lọc theo search sau
    
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase())) // || note.body.toLowerCase().includes(filters.searchText)

    notesEl.innerHTML = '' // Xóa cái cũ trước khi re-render cái list notes mới
    
    if (filteredNotes.length > 0) {
        filteredNotes.forEach(note => {
            const p = generateNoteDOM(note)
    
            // Rendering
            notesEl.appendChild(p)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = note => {
    // Tạo element
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    // const button = document.createElement('button')
    const statusEl = document.createElement('p')

    // * Setup the note title text
    textEl.textContent = note.title.length ? note.title : 'Unnamed note'
    // textEl.setAttribute('href', `/edit.html#${note.id}`) // Cách 2
    // textEl.href = '/edit.html' // Cách 1
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    // * Setup the link
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    // * Setup the status message
    statusEl.textContent = getLastEditedMessage(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl
}

const initializeEditPage = (noteId) => {
    const titleEle = document.querySelector('#note-title')
    const bodyEle = document.querySelector('#note-body')
    const editedEle = document.querySelector('#last-edited')   

    // Notice: local storage is shared across all pages on that domain (Ex: http://127.0.0.1:60297)
    const notes = getNotes()

    // Lấy note ra (bằng noteId)
    const note = notes.find(note => note.id === noteId) // Ko tìm thấy sẽ trả về undefined

    // Nếu ko tồn tại note có id đc truyền trên URL, redirect về trang chính
    if ( ! note) {
        location.assign('/')
    }

    //----------- XUỐNG TỚI ĐÂY CHẮC CHẮN TỒN TẠI NOTE -----------

    // Initial value on the page load
    titleEle.value = note.title
    bodyEle.value = note.body
    editedEle.textContent = getLastEditedMessage(note.updatedAt)
}

export { generateNoteDOM, renderNotes, getLastEditedMessage, initializeEditPage }