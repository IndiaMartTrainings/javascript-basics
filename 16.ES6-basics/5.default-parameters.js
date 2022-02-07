// function sayHello(message){
//     console.log(message)
// }

// sayHello()

function sayHello(message){
    message = typeof message !== 'undefined' ? message : 'Hi'
    console.log(message)
}

sayHello()

function wish(message='Hi'){
    console.log(message)
}

wish()
wish('Hello')