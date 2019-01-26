//import './ultilities' // Chạy file ultilities.js
import binhphuong, { add, name } from './ultilities' // Chạy file ultilities.js + Xài hàm add

import hamScream from './scream'

console.log('chay file index.js')

// Chỉ với [import './ultilities'] thử  xài hàm trong file ultilities.js xem đc ko? 
// Ko đc! Nó chỉ run thôi, chứ ko share code, ko xài đc func, variable của nó đc
// Muốn xài thì nó phải export cái gì, mình phải import cái cần.
console.log(add(9, 9))

console.log(hamScream(name))

console.log(binhphuong(6))