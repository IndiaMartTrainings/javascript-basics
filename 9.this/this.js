console.log(this) // Will be Global and points to Window Object

function sample(){
    console.log(this) // Will be Global and points to Window Object
}

sample()

var display = function(){
    console.log(this) // Will be Global and points to Window Object
}

display()

function test(){
   this.newVariable="Hello"
}

test()

console.log(newVariable)

var object = {
    name: 'Scott',
    log: function(){
        console.log(this)
    }
}

console.log(object.name)
console.log(object.log())

var student = {
    fullName: 'Tuan',
    getName: function(){
                var self = this;

                console.log(self)
                self.fullName="Uma"
                console.log(self)
                function updateName(){
                    self.fullName ="Mahesh"
                    console.log(self)
                }
                updateName()
    }
}

student.getName()

