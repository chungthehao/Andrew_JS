// Fetch existing todos from local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos') // trả về null nếu chưa tồn tại
    return todosJSON ? JSON.parse(todosJSON) : []
}

// Save todos to local storage
const saveTodos = function (todos) {
    // update (or create) 'todos' local storage
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    // Reset div#todos
    document.querySelector('#todos').innerHTML = ''

    // Lọc những todos match với searchText
    const filteredTodos = todos.filter(function (todo) {
        if ( ! filters.hideCompleted) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        }
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed
    })

    // Todo summary
    const incompleteTodos = getIncompleteTodos(filteredTodos)
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    // Xuất các todos ra 
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text

    return p
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summaryEle = document.createElement('h2')
    summaryEle.textContent = `You have ${incompleteTodos.length} todos left`

    return summaryEle
}

// Lọc những todo chưa hoàn thành (trả về 1 array các todo obj)
const getIncompleteTodos = function (todos) {
    return todos.filter(function (todo) {
        return ! todo.completed
    })
}