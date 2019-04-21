/**
 * * CALLBACK
 */
const getDataCallback = (callback) => {
    console.log(1)

    setTimeout(() => {
        // callback(undefined, 'This is the data')

        callback('This is my CALLBACK error', undefined)
        callback('This is my CALLBACK error', undefined)
    }, 2000)

    console.log(2)
}

getDataCallback((error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

console.log(3)


/**
 * * PROMISE (Mà muốn truyền params [closures])
 * - param truyền vào Promise constructor function là 1 function, function này được chạy ngay lập tức, thực hiện các việc 'tốn thời gian' (This is where we put our long running process)
 */
const getDataPromise = (thamSo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`This is my success data: ${thamSo}`)
            // reject('This is the PROMISE error')
        }, 2000)
    })
}

const myPromise = getDataPromise('Tham số của mình đưa vào')

myPromise.then(
    (data) => {
        console.log(data)
    },
    (err) => {
        console.log(err)
    }
)


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