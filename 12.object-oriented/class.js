// Class
function Student(){

}

// Instance
function Person(){

}

var person1 = new Person() 
var person2 = new Person()

// Constructor

function Order(){
    console.log('Order is initiated')
}

var order = new Order() // Order() is a constructor

// properties

function Customer(gender){
    this.gender = gender
}

var customser1 = new Customer('Female')
console.log(customser1)

var customser2 = new Customer('Male')
console.log(customser2)