let todos = [/*{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: false
}, {
    text: 'Do work',
    completed: true
}, {
    text: 'Exercise',
    completed: false
}*/]

/**
 * Check for existing data in local storage
 */
const todosJSON = localStorage.getItem('todos')
if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

const filters = {
    searchText: '',
    hideCompleted: false
}

/**
 * Đổ data từ 1 mảng các obj của Javascript ra HTML bằng DOM
 * 
 * - You have 3 todos left (p element)
 * - Add a p for each todo above (use text property của obj để show nội dung ra HTML)
 */
const renderTodos = function (todos, filters) {
    // Reset div#todos
    document.querySelector('#todos').innerHTML = ''

    // Lọc những todos match với searchText
    const filterdTodos = todos.filter(function (todo) {
        if ( ! filters.hideCompleted) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        }
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed
    })

    // Recalculate incomplete todos and update notice message
    const numberIncompleteTodos = incompleteTodos(filterdTodos).length
    printNotice(numberIncompleteTodos)

    // Xuất các todos ra 
    filterdTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}
// Lọc những todo chưa hoàn thành (trả về 1 array các todo obj)
const incompleteTodos = function (todos) {
    return todos.filter(function (todo) {
        return ! todo.completed
    })
}
// Print notice những todos chưa hoàn thành
const printNotice = function (numberIncompleteTodos) {
    const summaryP = document.createElement('h2')
    summaryP.textContent = `You have ${numberIncompleteTodos} todos left`
    document.querySelector('#todos').appendChild(summaryP)
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
    // update (or create) 'todos' local storage
    localStorage.setItem('todos', JSON.stringify(todos))

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
