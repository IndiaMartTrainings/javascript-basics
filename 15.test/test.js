// console.log(multiply(2)(3)(4)) //24

// function multiply(x){
//     return function(y){
//         return function(z){
//             return x*y*z
//         }
//     }
// }

// var a = 10;
// var b = a;
//     a = 20;

// console.log(a)
// console.log(b)

// var a =[1,2]
// var b = a;
//     a.push(3)

// console.log(a)
// console.log(b)

// var a = [1,2]
// var b =a;
// a = [1,2,3]

// console.log(a)
// console.log(b)

// // var output = (function(x){
// //     delete x
// //     return x
// // })(0)

// // console.log(output)

// // 1, "", true, null, undefined

// // {}, [], function(){}

// // var x =1
// // var output1 = (function(){
// //     delete x
// //     return x
// // })()


// // console.log(x)



// var output2 = (function(x){
//     console.log(x)
//     delete x
//     // console.log(x)
//     return x
// })({a:1, b:2})

// console.log(output2)

// var obj = {}
// obj= null 
// console.log(typeof null)

// var data = (function(){

//     y = 1;
//     delete y
//     return y
//     var y = 1;
//         delete y
//         return y
//     var y = 1;
//         delete y
//         return y 

// })()

// console.log(data)

// var data = (function(){

//     ay = 1;
//     console.log(this)
//     delete window.ay
//    // console.log(this)
//    // return ay
    

// })()

// console.log(data)

// ay=1;
// var sample = (function(){
//     delete ay
//   //  console.log(ay)
    
// })()
// console.log(ay)

// How to empty an array





 function sampel(){
    var chars = ['a', 'b', 'c', 'd', 'e', 'f']
 }

// Method1
//array =[]

//Method2
// while(array.length){
//     array.pop()
// }

//Method3
// array.length=0

// //Method4
// //array.splice(0, array.length)
// console.log(array)
// var data = array.pop()
// console.log(data)
// console.log(array.pop())

// console.log(array)

// var chars = ['a', 'b', 'c', 'd', 'e', 'f']

// console.log(chars, typeof chars)
//delete chars

//  var chars ="scott"
// //  console.log(typeof chars)
// //  console.log(window)
// console.log(window.chars)
// delete window.chars
// console.log(chars)
// // console.log(chars)

// function sampel(){

// }

//  data =[1,2,3]
//  data.pop()
//  data.pop()
//  data.pop()
//  console.log(data.pop())

// for(let count=0; count<3;count++){
//     console.log(count)
// }

// console.log(count)

console.log(1==1)
console.log(1=='1') // it will only check for value not the type

console.log(1===1)
console.log(1==='1') // This will check for both value and type

console.log(typeof 1)
console.log(typeof '1')