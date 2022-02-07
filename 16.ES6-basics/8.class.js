// function  Student (firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.getFullName = function(){
//             this.firstName + ' ' + this.lastName
//         }
// }
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(){
       return this.firstName + ' ' + this.lastName
    }

}

let stuObj1 = new Student("Scott", "Destanick")
console.log(stuObj1)
console.log(stuObj1.getFullName())