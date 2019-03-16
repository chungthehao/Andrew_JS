// Read existing notes from local storage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes') // sẽ trả về null nếu ở local storage chưa có
    
    return notesJSON ? JSON.parse(notesJSON) : []
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    // Tạo element
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // Setup the remove note button
    button.innerHTML = "&#9932;"
    noteEl.appendChild(button)

    // Setup the note title text
    textEl.textContent = note.title.length ? note.title : 'Unnamed note'
    noteEl.appendChild(textEl)

    return noteEl
}

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase()) // || note.body.toLowerCase().includes(filters.searchText)
    })

    document.querySelector('#notes').innerHTML = '' // Xóa cái cũ trước khi re-render cái list notes mới
    
    filteredNotes.forEach(function (note) {
        const p = generateNoteDOM(note)

        // Rendering
        document.querySelector('#notes').appendChild(p)
    })
}

const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}