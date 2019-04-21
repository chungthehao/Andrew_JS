/**
 * * CALLBACK HELL
 */
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}

// ** Do 2 asynchronous things with CALLBACK (using the data from the 1st to start the process for the 2nd)
getDataCallback(2, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        getDataCallback(data, (err, data2) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data2)
            }
        })
    }
})


/**
 * * PROMISE CHAINING
 * - param truyền vào Promise constructor function là 1 function, function này được chạy ngay lập tức, thực hiện các việc 'tốn thời gian' (This is where we put our long running process)
 */
const getDataPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof num === 'number' ? resolve(num * 2) : reject('Phải truyền số vào.')
        }, 2000)
    })
}
// ** CÁCH NGU (vẫn còn nesting)
getDataPromise(5).then(
    (data) => {
        getDataPromise(data).then(
            (data2) => {
                console.log(`Promise ngu data2: ${data2}`)
            },
            (err2) => {
                console.log(err2)
            }
        )
    },
    (err) => {
        console.log(err)
    }
)
// ** CÁCH KHÔN (promise chaining - thay vì then tiếp ở lúc gọi getDataPromise lần 2 thì return cái promise đó)
/**
 * Khi getDataPromise lần 1 resolve nó sẽ gọi getDataPromise lần 2, mà getDataPromise trả về 1 promise, đồng thời lại được
 * return trong then của getDataPromise lần 1 nên cục này:
 * getDataPromise(10).then(
        (data) => {
            return getDataPromise(data)
        },
        (err) => {
            console.log(err)
        }
    )
    sẽ là 1 promise của lần 2 nên then tiếp được!
 */
getDataPromise(10).then(
    (data) => {
        return getDataPromise(data)
    },
    (err) => {
        console.log(err)
    }
).then(
    (data2) => {
        console.log(`Promise khôn data2: ${data2}`)
    },
    (err2) => {
        console.log(err2)
    }
)
// 3 cấp luôn (bất cứ promise nào reject thì đều dừng lại hết và chạy error handler trong catch)
getDataPromise(3).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})


/**
 * * CALLBACK
 */
// const getDataCallback = (callback) => {
//     console.log(1)

//     setTimeout(() => {
//         // callback(undefined, 'This is the data')

//         callback('This is my CALLBACK error', undefined)
//         callback('This is my CALLBACK error', undefined)
//     }, 2000)

//     console.log(2)
// }

// getDataCallback((error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// })

// console.log(3)


/**
 * * PROMISE (Mà muốn truyền params [closures])
 * - param truyền vào Promise constructor function là 1 function, function này được chạy ngay lập tức, thực hiện các việc 'tốn thời gian' (This is where we put our long running process)
 */
// const getDataPromise = (thamSo) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`This is my success data: ${thamSo}`)
//             // reject('This is the PROMISE error')
//         }, 2000)
//     })
// }

// const myPromise = getDataPromise('Tham số của mình đưa vào')

// myPromise.then(
//     (data) => {
//         console.log(data)
//     },
//     (err) => {
//         console.log(err)
//     }
// )


/**
 * * PROMISE
 * - param truyền vào Promise constructor function là 1 function, function này được chạy ngay lập tức, thực hiện các việc 'tốn thời gian' (This is where we put our long running process)
 */
// const myPromise = new Promise((resolve, reject) => {
//     console.log(111)

//     setTimeout(() => {
//         // resolve('This is the PROMISE data')

//         reject('This is the PROMISE error') // chỉ reject hoặc resolve 1 lần duy nhất
//         reject('This is the PROMISE error')
//     }, 2000)

//     console.log(222)
// })

// ** 'then' định nghĩa what we want to do when we actually have the information. Hàm trong then được chạy khi promise resolve
// myPromise.then(
//     (data) => {
//         console.log(data)
//     },
//     (err) => {
//         console.log(err)
//     }
// )

// ** then 2 lần nhưng chỉ đợi 2 giây thôi, thực thi 1 lần dùng dữ liệu đó chạy 2 lần
// myPromise.then(
//     (data) => {
//         console.log('Làm gì đó khác với cùng 1 dữ liệu trả về')
//     },
//     (err) => {
//         console.log('Đây là error')
//     }
// )

// console.log(333)