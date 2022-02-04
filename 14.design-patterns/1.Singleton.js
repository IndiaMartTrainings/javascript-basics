// function Student (){
//     console.log('Student object is created')
// }

// var student1 = new Student()
// var student2 = new Student()
// var student3 = new Student()
// var student4 = new Student()

// console.log(student1)
// console.log(student2)
// console.log(student3)
// console.log(student4)

var Student = (function(){
    var instance = null

    var createInstance = function(){
        var obj = Object.create(null)
        console.log('Object is created')
        return obj
    }

    var getInstance = function(){
        if(!instance){
            instance = createInstance()
        }
        return instance
    }

    var obj = {
        create: getInstance
    }

    return obj

})()

var student1 = Student.create()
var student2 = Student.create()
var student3 = Student.create()
var student4 = Student.create()

 console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)
