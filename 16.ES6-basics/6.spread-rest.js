
// Spread Operator(...)
const odd =[1,3,5]

const combined = [2,4,6,...odd]

console.log(combined)

// Rest Operator(...)

function display(a,b, ...args){
    console.log(args)
}

display(1,2,3,4,5)

// Constructing array literal 

let initialChars = ['A', 'B']

let chars = [...initialChars, 'C' ,'D']

console.log(chars)

// Concatenate arrays

let numbers = [1,2]
let moreNumbers = [3,4]
let allNumbers = [...numbers, ...moreNumbers]
console.log(allNumbers)

// copy an array

let scores = [80,70, 90]
let copiedScores = [...scores]
console.log(copiedScores)

let newChars = ['A', ...'BC', 'D']

console.log(newChars)