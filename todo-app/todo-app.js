const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

// Xuất các todos và notice todos left (khi mới load trang)
renderTodos(todos, filters)

document.querySelector('#search-todo').addEventListener('input', function (e) {
    // Update searchText property of filters
    filters.searchText = e.target.value
    // Re-render lại list todos
    renderTodos(todos, filters)
})

document.querySelector('#add-todo-form').addEventListener('submit', function (e) {
    e.preventDefault()

    const newTodo = e.target.elements.toDo.value
    e.target.elements.toDo.value = '' // wipe the input

    // Update todos array
    todos.push({
        text: newTodo,
        completed: false
    })
    
    saveTodos(todos)

    renderTodos(todos, filters) // Re-render todo list
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    // Update
    filters.hideCompleted = e.target.checked
    // Re-render lại list todos
    renderTodos(todos, filters)
})



















// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     if (p.textContent.toLowerCase().includes('the')) {
//         p.remove()
//     }
// })
