const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=3e1c5bffd88793', {}).then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Có gì đó ko ổn!')
        }
    })
}

const getPuzzle = (wordCount) => {
    // return new Promise((resolve, reject) => {
    //     const request = new XMLHttpRequest()

    //     request.addEventListener('readystatechange', (e) => {
    //         if (e.target.readyState === 4 && e.target.status === 200) { // We have the final response
    //             const data = JSON.parse(e.target.responseText)
    //             resolve(data.puzzle)
    //         } else if (e.target.readyState === 4) {
    //             reject('An error has taken place!')
    //         }
    //     })

    //     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    //     request.send()
    // })

    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
        if (response.status === 200) {
            return response.json() // return the promise that resolve with our json data
        } else {
            throw new Error('Unable to fetch puzzle!')
        }
    }).then((data) => {
        return data.puzzle
    })
}


const getCountry = (countryCode) => {
    // return new Promise((resolve, reject) => {
    //     const req = new XMLHttpRequest()

    //     req.addEventListener('readystatechange', e => {
    //         if (e.target.readyState === 4 && e.target.status === 200) {
    //             const countries = JSON.parse(e.target.responseText)
    //             const country = countries.find(country => country.alpha2Code === countryCode)
    //             resolve(country)
    //         } else if (e.target.readyState === 4) {
    //             reject('Something went wrong!')
    //         }
    //     })

    //     req.open('GET', 'http://restcountries.eu/rest/v2/all')
    //     req.send()
    // })

    return fetch('http://restcountries.eu/rest/v2/all', {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else { // xong rồi mà ko thành công
            throw new Error('Unable to fetch data!')
        }
    }).then((countries) => {
        return countries.find(country => country.alpha2Code === countryCode)
    })
}


//** Dùng XMLHttpRequest, ko có promise built in, phải tự trả về promise rồi từ resolve, reject
// const getPuzzle = (wordCount) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()

//         request.addEventListener('readystatechange', (e) => {
//             if (e.target.readyState === 4 && e.target.status === 200) { // We have the final response
//                 const data = JSON.parse(e.target.responseText)
//                 resolve(data.puzzle)
//             } else if (e.target.readyState === 4) {
//                 reject('An error has taken place!')
//             }
//         })

//         request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//         request.send()
//     })
// }


//** Dùng XMLHttpRequest, ko có promise built in, phải tự trả về promise rồi từ resolve, reject
// const getCountry = (countryCode) => {
//     return new Promise((resolve, reject) => {
//         const req = new XMLHttpRequest()

//         req.addEventListener('readystatechange', e => {
//             if (e.target.readyState === 4 && e.target.status === 200) {
//                 const countries = JSON.parse(e.target.responseText)
//                 const country = countries.find(country => country.alpha2Code === countryCode)
//                 resolve(country)
//             } else if (e.target.readyState === 4) {
//                 reject('Something went wrong!')
//             }
//         })

//         req.open('GET', 'http://restcountries.eu/rest/v2/all')
//         req.send()
//     })
// }


// const getPuzzle = (wordCount, callback) => {
//     /**
//      * Making a HTTP request
//      */
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         // - Inside of this function, we're actually going to have this fire five different times, 
//         // one time for each 'readyState' change (0, 1, 2, 3, 4 [done])
//         if (e.target.readyState === 4 && e.target.status === 200) { // We have the final response
//             const data = JSON.parse(e.target.responseText)
//             callback(undefined, data.puzzle)
//         } else if (e.target.readyState === 4) {
//             callback('An error has taken place!', undefined)
//             // console.log('An error has taken place!')
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// }


// const getCountry = (countryCode, callback) => {
//     const req = new XMLHttpRequest()

//     req.addEventListener('readystatechange', e => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const countries = JSON.parse(e.target.responseText)
//             const country = countries.find(country => country.alpha2Code === countryCode)
//             callback(undefined, country)
//         } else if (e.target.readyState === 4) {
//             callback('Something went wrong!', undefined)
//         }
//     })

//     req.open('GET', 'http://restcountries.eu/rest/v2/all')
//     req.send()
// }


// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest()

//     request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3', false) // async: false
//     request.send()

//     // Đoạn code dưới này chỉ chạy sau khi server nhận response về --> Ko cần dùng event listener
//     if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         return data.puzzle
//     } else if (request.readyState === 4) {
//         throw new Error('Thing did not go well...')
//     }
// }