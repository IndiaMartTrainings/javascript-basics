try {
    // code that may or may not throw errors
} catch {
    // code be executed if an error occurs
} finally {
    // code to be executed regardless of an error
}

try {
    var output = getMessage("Hello")
    function Student(){

    }
    var student = new Student()
} catch(ex) {
    console.log(ex.name)
    console.log(ex.message)
} finally{
    // code cleanup
    student = null;
    // db.close()
    // file.close()
    // nw= null
}

try {
    throw "Error occured"
} catch(ex){
    console.log(ex)
}

try {

    var count =2;
    if(count >1){
        throw {
            number: 101,
            message: 'Duplicate Student Record Found'
        }
    }
} catch(ex) {
    console.log(ex)
}