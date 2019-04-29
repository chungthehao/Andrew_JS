import { getTodos, removeTodo, toggleTodo } from "./todos";
import { getFilters } from "./filters";

const renderTodos = () => {
    const todos = getTodos()
    const { searchText, hideCompleted } = getFilters() // Destructuring cái obj được trả về
    const todosEl = document.querySelector('#todos')

    // Reset div#todos
    todosEl.innerHTML = ''

    // Lọc những todos match với searchText
    const filteredTodos = todos.filter(todo => {
        if ( ! hideCompleted) {
            return todo.text.toLowerCase().includes(searchText.toLowerCase())
        }
        return todo.text.toLowerCase().includes(searchText.toLowerCase()) && !todo.completed
    })

    // Todo summary
    const incompleteTodos = filteredTodos.filter(todo => !todo.completed)
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
        renderTodos()
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
        renderTodos()
    })

    return todoEle
}

// generateSummaryDOM
const generateSummaryDOM = incompleteTodos => {
    const summaryEle = document.createElement('h2')
    summaryEle.textContent = `You have ${incompleteTodos.length} ${1 === incompleteTodos.length ? 'todo' : 'todos'} left`
    summaryEle.classList.add('list-title')

    return summaryEle
}

export { renderTodos, generateTodoDOM, generateSummaryDOM }