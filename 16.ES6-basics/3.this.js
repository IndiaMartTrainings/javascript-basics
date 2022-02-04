// var employee ={
//     id: 1,
//     greet: function(){
//         console.log(this.id)
//     }
// }
// employee.greet()

// Using Bind
var employee ={
    id: 1,
    greet: function(){
       setTimeout(function(){
            console.log(this.id)
       }.bind(this), 1000)
    }
}
employee.greet()

// using fat arrow

var employee ={
    id: 1,
    greet: function(){
       setTimeout(() => console.log(this.id), 1000)
    }
}
employee.greet()