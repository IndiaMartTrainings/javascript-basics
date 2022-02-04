function greet(message){
    var display = "display this"
    return function(name){
        console.log(message + ' ' + name + ' ' + display)
    }
}

var output = greet("Welcome")


console.log(output)
output("Scott")

function one(){
    var first=1
    var second="Uma"
    var third =true
    return function two(){
        console.log(first, third)
    }
}

one()()