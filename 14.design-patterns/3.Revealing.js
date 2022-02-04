// var Module = (function(){

    // var privateMethod = function(){

    // }

    // var someMethod = function(){

    // }

    // var anotherMethod = function(){

    // }

//     return {
//         getData : someMethod,
//         fetchData: anotherMethod
//     }
// })()

// console.log(Module)

// Accessing Private Methods

var Module = (function(){

    var privateMethod = function(message){
        console.log(message)
    }

    var publicMethod = function(text){
        privateMethod(text)
    }

    return {
        getInfo: publicMethod
    }


})()

Module.getInfo('calling private method')