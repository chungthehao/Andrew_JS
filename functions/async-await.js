/**
 * - ASYNC keyword to define an async function (async func khi goi se tra ve 1 promise, resolve voi gia tri return trong async func, reject voi error duoc throw trong async func)
 * - AWAIT operator (dat truoc func se tra ve promise) se tra ve value duoc resolve tu promise do, neu promise do (getDataPromise()) reject thi await se throw error dum minh ---> the async func se reject
 * 
 * * Tu promise then nay no ---> Khoi phai then nua
 * * Lam don gian promise chaining
 */

const getDataPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof num === 'number' ? resolve(num * 2) : reject('Phải truyền số vào.')
        }, 2000)
    })
}

/**
 * * async function --> return a promise (that promise is resolved with the value that you (the dev) choose to return from the function)
 */
const processData = async () => {
    let data = await getDataPromise(2)
    data = await getDataPromise(data)
    data = await getDataPromise(data)
    return data
    // * Neu ko dung async - await
    // getDataPromise(2).then(data => {
    //     console.log(data)
    // })

    // throw new Error('Something went wrong...') // will reject
    // return 12 // will resolve
}

/**
 * - The catch handler is going to run if the promise that comes back from the async function reject
 * - This promise is going to reject if we (the dev) choose to throw an error from the function
 */
processData().then(data => {
    console.log('Data', data)
}).catch(error => {
    console.log('Error', error)
})

// console.log(processData()) // "Promise { 12 }"" when the async func return 12