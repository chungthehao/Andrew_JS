// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!');
};

// greetUser();
// greetUser();
// greetUser();

let square = function (num) {
    let result = num * num;
    return result;
};

let value = square(3);
let otherValue = square(10);
//console.log(value, otherValue);

// Challenge Area
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let degree1 = convertFahrenheitToCelsius(32)
let degree2 = convertFahrenheitToCelsius(68)

console.log(degree1, degree2)