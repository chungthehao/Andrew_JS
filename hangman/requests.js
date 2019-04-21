const getPuzzle = (callback) => {
    /**
     * Making a HTTP request
     */
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        // - Inside of this function, we're actually going to have this fire five different times, 
        // one time for each 'readyState' change (0, 1, 2, 3, 4 [done])
        if (e.target.readyState === 4 && e.target.status === 200) { // We have the final response
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place!', undefined)
            // console.log('An error has taken place!')
        }
    })

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
    request.send()
}