// const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

/**
 * Challenge 1. Convert array to array of objects -> text, completed
 * Challenge 2. Create function to remove a todo by text value
 */
const todos = [{
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
}]

const removeTodo = function (todos, text) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    if (index !== -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return ! todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (todo1, todo2) {
        if (todo1.completed === todo2.completed) {
            return 0
        } else if (todo1.completed === false) {
            return -1
        } else {
            return 1
        }
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// console.log(todos)
// removeTodo(todos, 'buy food')
// console.log(todos)

// Delete the 3rd item
// todos.splice(2, 1)

// Add a new item onto the end
// todos.push('Learn javascript')

// Remove the first item from the list
// todos.shift()

// const leng = todos.length
// console.log(`You have ${leng} todos.`)

// todos.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// for (let index = 0; index < todos.length; index++) {
//     console.log(`${index + 1}. ${todos[index]}`)
// }

// console.log(todos)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[leng - 2]}`)