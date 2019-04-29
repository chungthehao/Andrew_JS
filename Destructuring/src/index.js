const todo = {
    id: 'kjsdkj49973edfjhsdg3673ghbjewsd8cx',
    text: 'Pay the water bill',
    completed: false
}

// * Cách 1
// const text = todo.text
// const completed = todo.completed
// * Cách 2: Dùng Destructuring
const { text:todoText, completed, details = 'No details provided', ...others } = todo
console.log(todoText)
console.log(completed)
console.log(details)
console.log(others) // object chứa những property còn lại trong todo mà chưa chỉ định destructure

// ----------- VỚI ARRAY -----------
const age = [23, 39, 91, 15]
const [firstAge, secondAge, , lastAge, khongCo = 'Gia tri gi do neu ko co'] = age
const [tuoi1, ...tuoiKhac] = age
console.log(firstAge, secondAge, lastAge, khongCo)
console.log(tuoiKhac)

/**
 * - Ngoài việc dùng destructuring (array, object) với 1 local variable, mình còn có thể
 * dùng ngay trong các argument của function
 */
const printTodo = (/*todo*/{ text, completed }) => {
    // console.log(`${todo.text}: ${todo.completed}`)
    console.log(`${text}: ${completed}`)
}
printTodo(todo)