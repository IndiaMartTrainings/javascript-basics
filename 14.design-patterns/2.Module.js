// var Module = (function(){
//     // Private Method
//     var privateMethod = function(){

//     }
//     return {
//         // Public Method because we are expsoing it to outside world
//         publicMethod : function(){
//             return "this is a public method"
//         }
//     }
// })()

// console.log(Module)
// console.log(Module.publicMethod())



// var Module = (function(){
//     // Private Method
//     var privateMethod = function(){

//     }
//     return {
//         // Public Method because we are expsoing it to outside world
//         publicMethodOne : function(){
//             return "this is a public method One"
//         },
//         publicMethodTwo : function(){
//             return "this is a public method Two"
//         },
//         publicMethodThree : function(){
//             return "this is a public method Three"
//         }
//     }
// })()

// console.log(Module)
// console.log(Module.publicMethodOne())


// var Module = (function(){

//     var myObj ={}

//     var privateMethod = function(){}
    
//     myObj.someMethod = function(){

//     }

//     return myObj

// })()

// console.log(Module)

var Module = (function(){

    var privateMethod = function(){}


    var myObj ={
        someMethod : function(){

        },
        anotherMethod : function(){

        },       
    }
    return myObj

})()

console.log(Module)