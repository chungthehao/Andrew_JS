const products = [{ name: 'computer'}]
const firstProduct = products[0]

const emptyArr = []
const emptyObj = {}

/**
 * - Truthy - Values (bất cứ cái gì, bao gồm ko phải boolean) that resolve to true in boolean context
 * - Falsy - Values (bất cứ cái gì, bao gồm ko phải boolean) that resolve to false in boolean context
 * 
 * - Falsy values - false, 0, '', null, undefined, NaN (Not a Number)
 * - Truthy values - tất cả những cái còn lại (bao gồm cả mảng rỗng, object rỗng)
 */

firstProduct ? console.log('Product found.') : console.log('Product not found.')

// emptyObj ? console.log('Product found.') : console.log('Product not found.') // empty obj {} --> truthy
// emptyArr ? console.log('Product found.') : console.log('Product not found.') // empty arr [] --> truthy
// '' ? console.log('Product found.') : console.log('Product not found.')
// 0 ? console.log('Product found.') : console.log('Product not found.')
// undefined ? console.log('Product found.') : console.log('Product not found.')
// 'test' ? console.log('Product found.') : console.log('Product not found.') // 'test' (string) --> truthy value

// firstProduct !== undefined ? console.log('Product found.') : console.log('Product not found.')
