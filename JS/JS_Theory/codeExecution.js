// main-X
// js code -> envirronment
// js -> browser, nodejs
// node -> global
// browser -> window object
// global area -> it is not inside any function
// JS engine -> that executes JS Code

// keyword -> given by your environment
// console.log(global)
// this prints -> empty object
// console.log(this)
// let a ;

// Execution context -> code + Environment(global) + JS(this)
// Every code inside JS runs in an EC
// there are 2 phases inside an EC

// 1. Creation Phase
//      a. memory allocation -> hoisting 
//          variables -> undefined
//          function -> memory allocate
//      b. this, global
//      c. outer environment -> lexical scope

// 2. Code Execution
//      execution starts from left to right and top to bottom
// default -> global EC
// EC -> is only created when fucntion is called

// console.log("line no. 28: ", a)
// console.log("line no. 29: ", b)
// var a;
// var b;
// a = 10;
// b = [1,2,3,4,5];
// console.log(a)
// console.log(b)
// fn();
// function fn(){
//     console.log("Thank you");
// }
// fn();

// function call -> New EC
// function execution finish -> variables of that fn will be destroyed
// console.log("line no. 45: ", a)
// var a;
// a = 10;
// console.log("line no. 48: ", a)
// fn();
// function fn(){
//     console.log("line no. 52: ", a)
//     var a = 10;
//     console.log("Thank you for calling me, Val of a: ", a);
// }
// fn();


// outer environment -> outer variables, functions
// console.log("line no. 62: ", a)
// var a;
// a = 10;
// console.log("line no. 65: ", a)
// fn();
// function fn(){
//     console.log("In function fn, line no. 69: ", a)
//     a++;
//     console.log("Thank you for calling me, Val of a: ", a);
// }
// fn();
// console.log("line no. 74: ", a)

// var varName = 1;
// // outer environment -> lexical scope
// // outer environment is defined by where is the function defifnition exists
// function a(){
//     console.log(varName);
// }
// function b(){
//     var varName = 2;
//     // function call
//     a();
// }
// b();

// scope of var
// var a;
// var a;
// a = 10;
// console.log(a);
// var a = 10;
// function fn(){
//     var a = 20;
//     a++;
//     console.log("line no. 96: ", a);
//     if(true){
//         var a = 30;
//         a++;
//         console.log("line no. 100: ", a);
//     }
//     console.log("line no. 102: ", a);
// }
// console.log("line no. 104: ", a);
// fn();
// console.log("line no. 106: ", a);
