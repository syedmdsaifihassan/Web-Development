// function
// variable
let a = 100;
function fn() {
    console.log("hello! i am fn")
    return "Hello";
}
function notToBeExported() {
    console.log("hello! i am fn")
    return "Hello";
}

// code export
module.exports = {
    varNAme: a,
    fxn: fn
}