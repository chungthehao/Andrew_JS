'use strict'

// Fetch existing todos from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos') // trả về null nếu chưa tồn tại
    
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (error) {
        return []
    }
}

// Save todos to local storage
const saveTodos = todos => {
    // update (or create) 'todos' local storage
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const todosEl = document.querySelector('#todos')

    // Reset div#todos
    todosEl.innerHTML = ''

    // Lọc những todos match với searchText
    const filteredTodos = todos.filter(todo => {
        if ( ! filters.hideCompleted) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        }
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed
    })

    // Todo summary
    const incompleteTodos = getIncompleteTodos(filteredTodos)
    todosEl.appendChild(generateSummaryDOM(incompleteTodos))

    // Xuất các todos ra 
    if (0 < filteredTodos.length) {
        filteredTodos.forEach(todo => {
            todosEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'There are no to-dos to show.'
        emptyMessage.classList.add('empty-message')
        todosEl.appendChild(emptyMessage)
    }
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
    const todoEle = document.createElement('label')
    const containerEle = document.createElement('div')
    const checkboxEle = document.createElement('input')
    const textEle = document.createElement('span')
    const button = document.createElement('button')

    // * Setup the checkbox element
    checkboxEle.setAttribute('type', 'checkbox')
    /*if (todo.completed) {
        checkboxEle.setAttribute('checked', true)
    }*/
    checkboxEle.checked = todo.completed
    containerEle.appendChild(checkboxEle)
    checkboxEle.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // * Setup the text element
    textEle.textContent = todo.text
    containerEle.appendChild(textEle)

    // * Setup the container
    todoEle.classList.add('list-item')
    containerEle.classList.add('list-item__container')
    todoEle.appendChild(containerEle)

    // * Setup the remove button
    button.innerHTML = 'remove'
    button.classList.add('button', 'button--text')
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
    summaryEle.textContent = `You have ${incompleteTodos.length} ${1 === incompleteTodos.length ? 'todo' : 'todos'} left`
    summaryEle.classList.add('list-title')

    return summaryEle
}

// Lọc những todo chưa hoàn thành (trả về 1 array các todo obj)
const getIncompleteTodos = todos => todos.filter(todo => !todo.completed)