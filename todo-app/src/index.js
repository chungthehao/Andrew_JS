import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'
import { renderTodos } from './views'

// Xuất các todos và notice todos left (khi mới load trang)
renderTodos()

document.querySelector('#search-todo').addEventListener('input', e => {
    // Update searchText property of filters
    setFilters({ searchText: e.target.value })
    // Re-render lại list todos
    renderTodos()
})

document.querySelector('#add-todo-form').addEventListener('submit', e => {
    e.preventDefault()
    const newTodo = e.target.elements.toDo.value.trim()
    if (0 < newTodo.length) {
        e.target.elements.toDo.value = '' // wipe the input
        createTodo(newTodo)
        renderTodos() // Re-render todo list
    }
})

document.querySelector('#hide-completed').addEventListener('change', e => {
    // Update
    setFilters({ hideCompleted: e.target.checked })
    // Re-render lại list todos
    renderTodos()
})

window.addEventListener('storage', e => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})