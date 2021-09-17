// function are variable
function outer(){
    let outerVal = 10;
    console.log('outer function called');
    return function inner(secondNum){
        console.log("inner func called");
        return outerVal + secondNum;
    }
}
let innerFnRef = outer();
console.log("between");
let rVal = innerFnRef(20);
console.log("rVal: ", rVal);