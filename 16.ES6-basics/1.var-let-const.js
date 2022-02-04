// function sample(){
//     var foo="blue"
//     console.log(foo) //blue
// }

// console.log(foo) // ReferenceError: foo is not defined

// Block Scoped

// if(true){
//     var foo="Hello"
//     let bar = "How are you ?"
//     const baz =" I am fine"

//     console.log(foo)
//     console.log(bar)
//     console.log(baz)
// }
// console.log(foo)
// //console.log(bar) // ReferenceError: bar is not defined
// //console.log(baz) // ReferenceError: baz is not defined

// for(var count=0; count<3;count++){
//     console.log(count)
// }

// console.log(count)

// for(let total=0; total<3;total++){
//     console.log(total)
// }

// console.log(total)

// Redefining 
// function sample(){
//     let foo=1;
//     foo=100

//   //  let foo =101 // 'foo' has already been declared
//     console.log(foo)

//     const count = 200
//     // count= 300

//      console.log(count)
// }

// sample()

const skills = ["JavaScript", "ReactJS", "NodeJS"]

//skills[3] = "Angular"
skills.push("VueJS")

console.log(skills)

// const API_URL =""
// const DB_SOURCE_NAME =""
// const USERNAME = ""
// const PASSWORD = ""