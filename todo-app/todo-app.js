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

const filters = {
    searchText: ''
}

/**
 * Đổ data từ 1 mảng các obj của Javascript ra HTML bằng DOM
 * 
 * - You have 3 todos left (p element)
 * - Add a p for each todo above (use text property của obj để show nội dung ra HTML)
 */
const renderTodos = function (todos, filters) {
    // Reset div#todos
    document.querySelector('#todos').innerHTML = ''

    // Lọc những todos match với searchText
    const filterdTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // Recalculate incomplete todos and update notice message
    const numberIncompleteTodos = incompleteTodos(filterdTodos).length
    printNotice(numberIncompleteTodos)

    // Xuất các todos ra 
    filterdTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}
// Lọc những todo chưa hoàn thành (trả về 1 array các todo obj)
const incompleteTodos = function (todos) {
    return todos.filter(function (todo) {
        return ! todo.completed
    })
}
// Print notice những todos chưa hoàn thành
const printNotice = function (numberIncompleteTodos) {
    const summaryP = document.createElement('h2')
    summaryP.textContent = `You have ${numberIncompleteTodos} todos left`
    document.querySelector('#todos').appendChild(summaryP)
}

// Xuất các todos và notice todos left (khi mới load trang)
renderTodos(todos, filters)

document.querySelector('#search-todo').addEventListener('input', function (e) {
    // Update searchText property of filters
    filters.searchText = e.target.value
    // Re-render lại list todos
    renderTodos(todos, filters)
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
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('I\'m adding a new todo')
})

/**
 * Listen for todo text change
 */
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})