const titleEle = document.querySelector('#note-title')
const bodyEle = document.querySelector('#note-body')
const rmBtnEle = document.querySelector('#remove-note')

// Lấy thông tin id của note truyền bằng # trên URL
const noteId = location.hash.substr(1)

// Lấy mảng các note ra
// Notice: local storage is shared across all pages on that domain (Ex: http://127.0.0.1:60297)
let notes = getSavedNotes()

// Lấy note ra (bằng noteId)
let note = notes.find(function (note, index) {
    return note.id === noteId
})

// Nếu ko tồn tại note có id đc truyền trên URL, redirect về trang chính
if (note === undefined) {
    location.assign('/')
}

//----------- XUỐNG TỚI ĐÂY CHẮC CHẮN TỒN TẠI NOTE -----------

// Đổ dữ liệu vô input, textarea
titleEle.value = note.title
bodyEle.value = note.body

// Khi có bất cứ thay đổi gì của title, ngay lập tức cập nhật giá trị và lưu lại
titleEle.addEventListener('input', function (e) {
    const newTitle = e.target.value

    note.title = newTitle

    saveNotes(notes)
})

// Khi có bất cứ thay đổi gì của body, ngay lập tức cập nhật giá trị và lưu lại
bodyEle.addEventListener('input', function (e) {
    const newBodyText = e.target.value

    note.body = newBodyText

    saveNotes(notes)
})

// Khi nhấn nút xóa
rmBtnEle.addEventListener('click', function (e) {
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
window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        // Lấy mảng notes mới
        notes = JSON.parse(e.newValue)

        // Cập nhật lại note
        note = notes.find(function (note, index) {
            return note.id === noteId
        })

        // Tab này xóa note thì tab kia cũng đc redirect về trang chính (y như tab này)
        if (note === undefined) {
            location.assign('/')
        }

        titleEle.value = note.title
        bodyEle.value = note.body
    }
})