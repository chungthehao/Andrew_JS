const titleEle = document.querySelector('#note-title')
const bodyEle = document.querySelector('#note-body')
const rmBtnEle = document.querySelector('#remove-note')
const editedEle = document.querySelector('#last-edited')

// Lấy thông tin id của note truyền bằng # trên URL
const noteId = location.hash.substr(1)

// Lấy mảng các note ra
// Notice: local storage is shared across all pages on that domain (Ex: http://127.0.0.1:60297)
let notes = getSavedNotes()

// Lấy note ra (bằng noteId)
let note = notes.find(note => note.id === noteId) // Ko tìm thấy sẽ trả về undefined

// Nếu ko tồn tại note có id đc truyền trên URL, redirect về trang chính
if ( ! note) {
    location.assign('/')
}

//----------- XUỐNG TỚI ĐÂY CHẮC CHẮN TỒN TẠI NOTE -----------

// Initial value on the page load
titleEle.value = note.title
bodyEle.value = note.body
editedEle.textContent = getLastEditedMessage(note.updatedAt)

// Khi có bất cứ thay đổi gì của title, ngay lập tức cập nhật giá trị và lưu lại
titleEle.addEventListener('input', e => {
    const newTitle = e.target.value

    note.title = newTitle
    note.updatedAt = moment().valueOf()
    editedEle.textContent = getLastEditedMessage(note.updatedAt)

    saveNotes(notes)
})

// Khi có bất cứ thay đổi gì của body, ngay lập tức cập nhật giá trị và lưu lại
bodyEle.addEventListener('input', e => {
    const newBodyText = e.target.value

    note.body = newBodyText
    note.updatedAt = moment().valueOf()
    editedEle.textContent = getLastEditedMessage(note.updatedAt)

    saveNotes(notes)
})

// Khi nhấn nút xóa
rmBtnEle.addEventListener('click', e => {
    // Xóa note có id là 'noteId' trong mảng 'notes'
    removeNote(noteId)
    // Lưu notes vào local storage
    saveNotes(notes)
    // Redirect về trang chính
    location.assign('/')
})

/**
 * Global event listener
 * Notice: Sự kiện 'storage' chỉ fire trên những trang khác trang hiện tại (những tab khác).
 */
window.addEventListener('storage', e => {
    if (e.key === 'notes') {
        // Lấy mảng notes mới
        notes = JSON.parse(e.newValue)

        // Cập nhật lại note
        note = notes.find(note => note.id === noteId) // Ko tìm thấy sẽ trả về undefined

        // Tab này xóa note thì tab kia cũng đc redirect về trang chính (y như tab này)
        if ( ! note) {
            location.assign('/')
        }

        titleEle.value = note.title
        bodyEle.value = note.body
        editedEle.textContent = getLastEditedMessage(note.updatedAt)
    }
})