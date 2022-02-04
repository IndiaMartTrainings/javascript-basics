 'use strict'

console.log(this)

function sample(){
    console.log(this)
}

sample.bind({})()