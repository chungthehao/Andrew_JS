import { initializeEditPage, getLastEditedMessage } from './views'
import { updateNote, removeNote } from './notes';

const titleEle = document.querySelector('#note-title')
const bodyEle = document.querySelector('#note-body')
const editedEle = document.querySelector('#last-edited')
const rmBtnEle = document.querySelector('#remove-note')

// Lấy thông tin id của note truyền bằng # trên URL
const noteId = location.hash.substr(1)

initializeEditPage(noteId)

// Khi có bất cứ thay đổi gì của title, ngay lập tức cập nhật giá trị và lưu lại
titleEle.addEventListener('input', e => {
    const note = updateNote(noteId, { title: e.target.value })
    editedEle.textContent = getLastEditedMessage(note.updatedAt)
})

// Khi có bất cứ thay đổi gì của body, ngay lập tức cập nhật giá trị và lưu lại
bodyEle.addEventListener('input', e => {
    const note = updateNote(noteId, { body: e.target.value })
    editedEle.textContent = getLastEditedMessage(note.updatedAt)
})

// Khi nhấn nút xóa
rmBtnEle.addEventListener('click', e => {
    // Xóa note có id là 'noteId' trong mảng 'notes'
    removeNote(noteId)
    // Redirect về trang chính
    location.assign('/')
})

/**
 * Global event listener
 * Notice: Sự kiện 'storage' chỉ fire trên những trang khác trang hiện tại (những tab khác).
 */
window.addEventListener('storage', e => {
    if (e.key === 'notes') {
        initializeEditPage(noteId)
    }
})