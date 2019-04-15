// Fetch existing todos from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos') // trả về null nếu chưa tồn tại
    return todosJSON ? JSON.parse(todosJSON) : []
}

// Save todos to local storage
const saveTodos = todos => {
    // update (or create) 'todos' local storage
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    // Reset div#todos
    document.querySelector('#todos').innerHTML = ''

    // Lọc những todos match với searchText
    const filteredTodos = todos.filter(todo => {
        if ( ! filters.hideCompleted) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        }
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed
    })

    // Todo summary
    const incompleteTodos = getIncompleteTodos(filteredTodos)
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    // Xuất các todos ra 
    filteredTodos.forEach(todo => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Delete a todo from the list by id
const removeTodo = todoId => {
    // Find the index
    const todoIndex = todos.findIndex(todo => todoId === todo.id)
    // Delete the todo if found
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = todoId => {
    // Find the todo by id
    const todo = todos.find(todo => todoId === todo.id) // Trả về undefined nếu ko tìm thấy
    // toggle completed prop if found
    if (todo) {
        todo.completed = ! todo.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = todo => {
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
    checkboxEle.addEventListener('change', () => {
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
    button.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos(todos, filters)
        saveTodos(todos)
    })

    return todoEle
}

// Get the DOM elements for list summary
const generateSummaryDOM = incompleteTodos => {
    const summaryEle = document.createElement('h2')
    summaryEle.textContent = `You have ${incompleteTodos.length} todos left`

    return summaryEle
}

// Lọc những todo chưa hoàn thành (trả về 1 array các todo obj)
const getIncompleteTodos = todos => todos.filter(todo => !todo.completed)