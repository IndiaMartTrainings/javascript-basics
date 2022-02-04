var person1 = {firstName: 'Scott', lastName: 'Desatnick'}
var person2 = {firstName: 'Adam', lastName: 'Colson'}
var person3 = {firstName: 'Tuan', lastName: 'Bui'}

function getName(message, city){
    return message + " to " +  
           city + ' ' +
           this.firstName + ' ' + 
           this.lastName 
}

// var fullname="Uma"
// fullname.city ="hello" // Not throwing Errors
// fullname.getCity = function(){} // Not throwing Errors

// console.log(fullname, typeof fullname)
// console.log(fullname.city)

// var output = getName.bind(person1)
// console.log(output("Welcome", "Boston"))

// This is not going to work
// var output1 = getName( "Welcome", "Boston").bind(person1)
// console.log(output1)

var getNameUsingBind = getName.bind(person1, "Welcome","Boston") 
console.log(getNameUsingBind())

var getNameUsingCall = getName.call(person2, "Welcome","Sydney") 
console.log(getNameUsingCall)

var getNameUsingCall = getName.apply(person3, ["Welcome","Vietnam"]) 
console.log(getNameUsingCall)

function sayHello(){
    console.log(this)
}

var output1 = sayHello.call(person1)
var output2 = sayHello.apply(person1)

console.log(output1)
console.log(output2)

var student = {
    fullName: 'Tuan',
    getName: function(){
                console.log(this)
                this.fullName="Uma"
                console.log(this)
               var updateName= function updateName(){
                    this.fullName ="Scott"
                    console.log(this)
                }.bind(this)
                updateName()              
    }
}

student.getName()

