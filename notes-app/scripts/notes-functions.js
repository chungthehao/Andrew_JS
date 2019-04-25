/**
 * File này chỉ chứa các function (ko có chạy bất cứ lệnh gì cả)
 */

'use strict'

/** Test use strict mode */
// const public = 'gi do' // Unexpected strict mode reserved word
// let data // fix leak global variables mà strict mode báo lỗi
// const processData = () => {
//     // Tìm trong này ko thấy, tìm ngoài global cũng ko thấy biến data
//     data = '3367289' // It's going to create a 'data' variable in global scope
// }
// processData()
// console.log(data)
/** End: Test use strict mode */

// Read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes') // sẽ trả về null nếu ở local storage chưa có
    
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (error) {
        return []
    }
}

// Delete a note from the list
const removeNote = noteId => {
    // Tìm index của note cần delete
    const noteIndex = notes.findIndex(note => note.id === noteId)
    // Delete the note if found the index
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = note => {
    // Tạo element
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    // const button = document.createElement('button')
    const statusEl = document.createElement('p')

    // * Setup the remove note button
    // button.innerHTML = "x"
    // noteEl.appendChild(button)
    // button.addEventListener('click', () => {
    //     removeNote(note.id)
    //     saveNotes(notes)
    //     renderNotes(notes, filters)
    // })

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

// Sort your notes by one of three ways (trả về mảng notes đã được sort)
const sortNotes = (notes, sortBy) => {
    switch (sortBy) {
        case 'byEdited':
            return notes.sort((truoc, sau) => {
                if (truoc.updatedAt > sau.updatedAt) {
                    return -1 // 'truoc' sẽ trước 
                } else if (truoc.updatedAt < sau.updatedAt) {
                    return 1 // 'sau' sẽ trước
                } else {
                    return 0
                }
            })
        case 'byCreated':
            return notes.sort((a, b) => {
                if (a.createdAt > b.createdAt) {
                    return -1
                } else if (a.createdAt < b.createdAt) {
                    return 1
                } else {
                    return 0
                }
            })
        case 'alphabetical':
            return notes.sort((a, b) => {
                if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1
                } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return 1
                } else {
                    return 0
                }
            })
        default: 
            return notes
    }
}

// Render application notes
const renderNotes = (notes, filters) => {
    const notesEl = document.querySelector('#notes')

    // Sort trước, lọc theo search sau
    notes = sortNotes(notes, filters.sortBy)

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

const saveNotes = notes => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Generate the last edited message
const getLastEditedMessage = timestamp => `Last edited ${moment(timestamp).fromNow()}`