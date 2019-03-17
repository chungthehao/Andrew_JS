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

// Delete a todo from the list by id
const removeTodo = function (todoId) {
    // Find the index
    const todoIndex = todos.findIndex(function (todo) {
        return todoId === todo.id
    })
    // Delete the todo if found
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = function (todoId) {
    // Find the todo by id
    const todo = todos.find(function (todo) {
        return todoId === todo.id
    })
    // toggle completed prop if found
    if (todo !== undefined) {
        todo.completed = ! todo.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const todoEle = document.createElement('div')
    const checkboxEle = document.createElement('input')
    const textEle = document.createElement('span')
    const button = document.createElement('button')

    // Setup the checkbox element
    checkboxEle.setAttribute('type', 'checkbox')
    /*if (todo.completed) {
        checkboxEle.setAttribute('checked', true)
    }*/
    checkboxEle.checked = todo.completed
    todoEle.appendChild(checkboxEle)
    checkboxEle.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup the text element
    textEle.textContent = todo.text
    todoEle.appendChild(textEle)

    // Setup the remove button
    button.innerHTML = '&#9932;'
    todoEle.appendChild(button)
    button.addEventListener('click', function () {
        removeTodo(todo.id)
        renderTodos(todos, filters)
        saveTodos(todos)
    })

    return todoEle
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