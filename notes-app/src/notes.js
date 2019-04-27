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

notes = loadNotes()

export { getNotes, createNote } 