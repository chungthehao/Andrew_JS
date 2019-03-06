const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']
const leng = todos.length

// Delete the 3rd item
todos.splice(2, 1)
// Add a new item onto the end
todos.push('Learn javascript')
// Remove the first item from the list
todos.shift()

console.log(`You have ${leng} todos.`)
console.log(todos)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[leng - 2]}`)