// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const calcGrade = function (score, total) {
    let grade = 'F'
    const percent = score / total * 100

    if (percent > 89) {
        grade = 'A'
    } else if (percent > 79) {
        grade = 'B'
    } else if (percent > 69) {
        grade = 'C'
    } else if (percent > 59) {
        grade = 'D'
    }

    return `You got a ${grade} (${percent}%)!`
}

console.log(calcGrade(15, 20))
console.log(calcGrade(10, 20))
console.log(calcGrade(12, 20))
console.log(calcGrade(14, 20))
console.log(calcGrade(81, 100))
console.log(calcGrade(90, 100))