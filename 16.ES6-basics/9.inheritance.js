class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    getPersonName(){
        return this.firstName + ' ' + this.lastName
    }
}

var person = new Person('Adam', 'Colson')
console.log(person)

class Student extends Person {

    constructor(age){
        super()
        this.age = age
    }
    getFullName(){
       return this.firstName + ' ' + this.lastName
    }
}


var student = new Student(45)
student.firstName = 'Scott'
student.lastName = 'Destanick'
console.log(student)