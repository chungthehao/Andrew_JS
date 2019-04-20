const data = {
    locations: [],

    get location() {
        return this._location
    },
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }

    // location: ''
}

// code that uses the data object
data.location = '   Sai Gon       '
data.location = ' Toronto    '
console.log(data.location)
console.log(data)