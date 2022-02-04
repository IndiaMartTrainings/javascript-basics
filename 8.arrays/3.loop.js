var people =["Scott","Adam", "Tuan"]

/**
 * ? using For Loop
 */
for(var i=0; i<people.length;i++){
    console.log(people[i], i)
}
/**
 * * using Foreach
 */
people.forEach(function(name, index){
    console.log(name, index)
})
/**
 * ? using map
 */
people.map(function(name, index){
    console.log(name, index)
})

var names1 = people.forEach(function(name, index){
        return name
})

var names2 = people.map(function(name, index){
    return {
        name:name,
        index:index
    }
})

var names2 = people.map(function(name, index){
    return {name,index}
})

// var names2 = people.map(function(name, index){
//     return name + ' ' + index
// })

console.log(names1)
console.log(names2)


/**
 * ? using For in
 */

for(name in people){
    console.log(name)
}

/**
 * ? using For of
 */

 for(name of people){
    console.log(name)
}

/**
 * ? using For of to get index and value
 */

for(var [index, value] of people.entries()){
    console.log(index, value)
}