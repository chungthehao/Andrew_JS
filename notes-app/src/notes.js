import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

// Read existing notes from local storage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes') // sẽ trả về null nếu ở local storage chưa có
    
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (error) {
        return []
    }
}

// Expose notes from module
const getNotes = () => notes

const createNote = () => {
    const noteId = uuidv4()
    const nowTimestamp = moment().valueOf()
    notes.push({
        id: noteId,
        title: '',
        body: '',
        createdAt: nowTimestamp,
        updatedAt: nowTimestamp
    })
    saveNotes()
}

// Save the notes to localStorage
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Delete a note from the list
const removeNote = noteId => {
    // Tìm index của note cần delete
    const noteIndex = notes.findIndex(note => note.id === noteId)
    // Delete the note if found the index
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1)
        saveNotes()
    }
}

// Sort your notes by one of three ways (trả về mảng notes đã được sort)
const sortNotes = (sortBy) => {
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

const updateNote = (noteId, updateInfo) => {
    const note = notes.find(note => note.id === noteId)

    if ( ! note) return;

    if (typeof updateInfo.title === 'string' && updateInfo.title.trim() !== '') {
        note.title = updateInfo.title.trim()
        note.updatedAt = moment().valueOf()
    }

    if (typeof updateInfo.body === 'string' && updateInfo.body.trim() !== '') {
        note.body = updateInfo.body.trim()
        note.updatedAt = moment().valueOf()
    }

    saveNotes()
}

notes = loadNotes()

export { getNotes, createNote, removeNote, sortNotes, updateNote } 