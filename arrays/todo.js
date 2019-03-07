const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

// Delete the 3rd item
todos.splice(2, 1)
// Add a new item onto the end
todos.push('Learn javascript')
// Remove the first item from the list
todos.shift()

const leng = todos.length
console.log(`You have ${leng} todos.`)

todos.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)
})

// console.log(todos)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[leng - 2]}`)