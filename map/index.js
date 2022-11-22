const nums = [1, 2, 3, 4, 5]

const squared = nums.map(x => x*x)

console.log(squared)

const names = ['alice', 'bob', 'charlie', 'danielle']
const capitalNames = names.map(x => x.charAt(0).toUpperCase() + x.slice(1))

console.log(capitalNames)

const pokemon = ['Bulbasaur', 'Charamander', 'Squirtle']
const elementPokemon = pokemon.map(x => x = `<p>${x}</p>`)
console.log(elementPokemon)