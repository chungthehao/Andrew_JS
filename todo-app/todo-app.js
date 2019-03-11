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

/**
 * Đổ data từ 1 mảng các obj của Javascript ra HTML bằng DOM
 * 
 * - You have 3 todos left (p element)
 * - Add a p for each todo above (use text property của obj để show nội dung ra HTML)
 */
const incompleteTodos = todos.filter(function (todo) {
    return ! todo.completed
})
const summaryP = document.createElement('h2')
summaryP.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summaryP)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})



// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     if (p.textContent.toLowerCase().includes('the')) {
//         p.remove()
//     }
// })

//--------------------------------------------------------------------

/**
 * Listen for new todo creation
 */
document.querySelector('button').addEventListener('click', function (e) {
    console.log('I\'m adding a new todo')
})