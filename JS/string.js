//strings

// let str = 'Hello, i am a string';
// console.log(str);
// str = "Hello, i am also a string";
// console.log(str);

// template string it is enclosed inside backtick
let str = `Hello I am also a string`;
// console.log("Actual String: "+str);

//charAt, slice
// console.log("charAt: "+str.charAt(4));
// console.log("sliced: "+str.slice(4, 10));

// split on the basis of ("delimeter") -> array of string 
let splitStr = str.split(" ");
// console.log("Array String: "+ splitStr);
// console.log(aplitStr(2));

// trim, join
let str2 = "    Trimmed String    "
// console.log(str2.trim());
// console.log("Join Array of String: "+ splitStr.join("+"));


/*
Jasbir Singh code

// strings 
let a = 10;
let str = "Hello I am a \nstring " + a;
// console.log(str);
str = 'Hello I am also a \nstring ' + a;
// console.log(str);
// template string it is enclosed inside backtick
let str1 = `Hello_I_am a template string ${a}`;
console.log("Actual str:", str1);
let charAt4 = str.charAt(4).toUpperCase(); 
console.log("char At 4", charAt4);
// starting index ,ending-1
let slicedStr = str.slice(4, 10);
// console.log("sliced ",slicedStr);
// toLowerCase, toUpperCase
// string -> array of string on the  
// basis of the delimeter-> array of string
let arrayStr = str.split("a");
// console.log("Array of String", ArrayStr);
// get length
let length=str.length;
console.log(length);
let str = "   Hello How Are You  ";
let trimmedStr = str.trim();
// console.log(trimmedStr);
let arrString = trimmedStr.split(" ");
console.log("arr string", arrString);
// convert array of string into 
// a string on the basis of delimieter 
let ans = arrString.join("+");
console.log(ans);

*/


/* ---HACKER_RANK--- */


// Rotate a no.

// let r = Number(2);
// // console.log(r);
// let n = Number(562984);
// let c = 0;
// let n1 = n;
// while(n!=0){
//     n = Math.floor(n/10);
//     c++;
// }
// // console.log(c);
// r=r%c;
// if(r<0) {
//     r=r+c;
// }
// let p = Math.pow(10,r);
// let m = Math.pow(10, c-r);
// let q = Number(Math.floor(n1/p));
// // console.log(q);
// let rem = Number(Math.floor(n1%p));
// // console.log(rem);
// let res = (rem*m)+q;
// console.log(res);


// JS_Strings_Longest_Word

// let input = "The quick brown fox jumped over the lazy dog";
// let arrStr = input.split(" ");
// let max = arrStr[0].length;
// let idx;
// for(let i=0; i<arrStr.length; i++){
//     if(arrStr[i].length>max){
//         max = arrStr[i].length;
//         idx = i;
//     }
// }
// console.log(arrStr[idx]);


// JS_Strings_Title_case

// let input = "I'm a little tea pot";
// let arrStr = input.split(" ");
// console.log(arrStr);
// for(let i=0; i<arrStr.length; i++){
//     let f = arrStr[i].charAt(0).toUpperCase();
//     arrStr[i] = f.concat(arrStr[i].substring(1));
//     console.log(arrStr[i]);
// }
// console.log(arrStr.join(" "));

