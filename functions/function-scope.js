// Global scope (convertFahrenheitToCelsius, degree1, degree2)
    // Local scope (fahrenheit, celsius)
        // Local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let degree1 = convertFahrenheitToCelsius(32)
let degree2 = convertFahrenheitToCelsius(68)

console.log(degree1, degree2)