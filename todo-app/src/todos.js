import uuidv4 from 'uuid/v4'

// Setup the empty todos array
let todos = [] // closure

const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos') // trả về null nếu chưa tồn tại
    
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (error) {
        todos = []
    }
}

const saveTodos = () => {
    // update (or create) 'todos' local storage
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos

const createTodo = (todoText) => {
    if (typeof todoText === 'string' && todoText.trim() !== '') {
        todos.push({
            id: uuidv4(),
            text: todoText,
            completed: false
        })
        saveTodos()
    }
}

const removeTodo = todoId => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

const toggleTodo = todoId => {
    try {
        const todo = todos.find(todo => todo.id === todoId)
        if (todo) {
            todo.completed = !todo.completed
            saveTodos()
        }
    } catch (e) {
        console.log(e.message)
    }
}

loadTodos()

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo }