let message = 'This a string using \n' +  
              'single \n' + 
              'quotes'

console.log(message)

let fName = 'Scott', lName ='Desatnick'

console.log('FullName is : %s %s', fName, lName)

let obj ={name: 'adam', city: 'boston'}

console.log('User info : %o', obj)

// Template literal Syntax

let templateMessage = `This a string 
                       using 
back 
tick`

console.log(templateMessage)

let firstName='Scott',
    lastName ='Desatnick'

console.log(`FullName is : ${firstName} ${lastName}`)

let userObj = {
    name: 'Tuan',
    city: 'Vietnam'
}

console.log(`User Details : ${userObj.name} ${userObj.city}`)

console.log(`User Details : ${JSON.stringify(userObj)}`)