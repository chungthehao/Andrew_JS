// Named export (Muốn export bao nhiêu cũng đc: 1 hay 1000 đều ok)
// Default export (Chỉ đc chọn 1 cái thôi)

console.log('chay file ultilities.js')

/*export*/ const add = (a, b) => a + b // Named export

/*export*/ const name = 'Ma Lau' // Named export

const square = num => num * num
/*export default square*/ // Chỗ import để xài có thể đặt lại tên tùy ý, vì nó biết rằng là th default

// 1 cách khác để chỉ ra những export chung cho file này tại 1 chỗ
export { add, name, square as default }