var person = {
    firstName: 'Scott',
    lastName:'Desatnick',
    city: 'Boston',
    age:45
}



person.firstName ="Mr." // UPDATE
person.email ="scott@ef.com" // CREATE
delete person.age // DELETE
console.log(person) // READ

/**
 * ? Object.preventExtensions
 * ? We can update and delete the properties
 * ? but we can't add new peoprties
 */


var preventObject = {
    name: 'Scott',
    city: 'Boston',
    age:45
}

Object.preventExtensions(preventObject)

preventObject.email="scott@ef.com" // ADD
preventObject.name="Desatnick" // UPDATE
delete preventObject.age // DELETE

console.log(preventObject)


/**
 * ? Object.seal
 * ? We can't add and delete the properties
 * ? but we can update the peoprties
 */


 var sealObject = {
    name: 'Scott',
    city: 'Boston',
    age:45
}

Object.seal(sealObject)

sealObject.email="scott@ef.com" // ADD
sealObject.name="Desatnick" // UPDATE
delete sealObject.age // DELETE

console.log(sealObject)

/**
 * ? Object.seal
 * ? We can't add and delete the properties
 * ? and update the peoprties
 */


 var freezeObject = {
    name: 'Scott',
    city: 'Boston',
    age:45,
    address: {
        state: 'Massechhusets'
    }
}

Object.freeze(freezeObject)
Object.freeze(freezeObject.address)

freezeObject.email="scott@ef.com" // ADD
freezeObject.name="Desatnick" // UPDATE
delete freezeObject.age // DELETE
freezeObject.address.state="Telangana"
console.log(freezeObject)

// var output1 = JSON.parse(JSON.stringify(freezeObject))

// output1.email="scott@ef.com" // ADD
// output1.name="Desatnick" // UPDATE
// delete output1.age // DELETE
// console.log(output1)