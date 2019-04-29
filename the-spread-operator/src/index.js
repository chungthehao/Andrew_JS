/**
 * THE SPREAD OPERATOR
 */
const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

const printTeam = (teamName, coach, ...players /*firstPlayer, secondPlayer*/) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
    // console.log(firstPlayer, secondPlayer)
}

printTeam(team.name, team.coach, ...team.players)

//------------- CLONE AN ARRAY -------------
const cities = ['Barcelona', 'Cape Town', 'Bordeaux']
const citiesCopy = ['Toronto', ...cities, 'Los Angeles'] // clone

citiesCopy.push('Santiago')

console.log(cities)
console.log(citiesCopy)

//------------- AN ALTERNATIVE WAY TO ADD ITEMS ONTO AN ARRAY -------------
let animals = ['monkey', 'mouse', 'dog', 'cat']
animals = [...animals, 'pig'] // <=> Array.prototype.push()

console.log(animals)