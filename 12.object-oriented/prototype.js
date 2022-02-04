function Student(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     return this.firstName + ' ' + this.lastName
    // }
}

// Avoiding duplicate copies of our methods

Student.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

// Extend 

Student.prototype.city ='Delhi'


var student1 = new Student('Scott', 'Adam')
student1.__proto__.city='Boston'
console.log(student1)

var student2 = new Student('Adam', 'Colson')
student2.city='Sydney'
console.log(student2)

var student3 = new Student('Tuan', 'Bui')
console.log(student3)


function Person(){
    this.name ='Johngalt'
    this.gnder='M'
}

var personObj = new Person()

console.log(Person.prototype)
console.log(personObj.prototype)
console.log(personObj.__proto__)

console.log(typeof Person.prototype)
console.log(typeof personObj.__proto__)
console.log(Person.prototype === personObj.__proto__)