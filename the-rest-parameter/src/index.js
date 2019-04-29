/**
 * THE REST PARAMETER
 */

const calculateAverage = (thing, /*numOne, numTwo*/ ...numbers) => {
    // return (numOne + numTwo) / 2

    let sum = 0
    numbers.forEach(num => sum += num)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage('grade', 12, 30, 100, 200))
// console.log(calculateAverage(true, 'ashsajh'))

// --------------- CHALLENGE ---------------

const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')