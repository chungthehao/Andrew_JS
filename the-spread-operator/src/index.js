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

//---------------- THE SPREAD OPERATOR FOR OBJECT ----------------
let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017 
}
let newHouse = {
    basement: true,
    bathrooms: 5, // Sẽ bị property trong object house override
    ...house,
    bedrooms: 8 // override lên property có trong object house
}
newHouse.yearBuilt = 2018

console.log(house)
console.log(newHouse)

// ------------- CHALLENGE: merge 2 objects -------------
const person = { name: 'Henry', age: 27 }
const location = { city: 'HCM', country: 'VN' }
const overview = { ...person, ...location }
console.log(overview)