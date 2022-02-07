// Array Destructuring

let array = ["Scott", "Adam", "Tuan"]

let [firstName, secondName, thirdName] = array

console.log(firstName) // array[0]
console.log(secondName) // array[1]
console.log(thirdName) // array[2]

let names = ["Scott", "Adam", "Tuan"]

let [fName,, tName] = names

console.log(fName) // array[0]
//console.log(sName) // array[1]
console.log(tName) // array[2]

// Split()

let [nameOne, nametwo] = "Scott Desatnick".split(' ')

console.log(nameOne)
console.log(nametwo)

let user = {
    name: 'Scott',
    age: 45
}

for(let [key, value] of Object.entries(user)){
    console.log(`${key}: ${value}`)
}

let options = {
    title: 'Menu',
    width: 100,
    height: 200
}

let {title, width, height} = options

console.log(title)
console.log(width)
console.log(height)