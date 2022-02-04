(function(){
    console.log(this)
    var one = function(){
        console.log(this)
    }.bind(this)
    one()
}).bind({})()