//cretes empty object 
let obj = {};

let cap = {
    first: "Steve",
    last: "Rogers",
    friends: ["peter", "bruce", "tony"],
    isAvenger: false,
    age: 34,
    sayHi: function(){
        console.log("cap says Hi!");
    },
    address: {
        state: "New York",
        city: "NY city",
    }
}
// console.log("first: ", cap.first)
// console.log("last: ", cap.last)
// console.log("firends[2]: ", cap.friends[2])
// console.log("isAvenger: ", cap.isAvenger)
// console.log("sayHi func: ", cap.sayHi())

//loop
// for(let i in cap) {
//     console.log(i, " : ", cap[i]);
// }

cap.movies = ["firstavneger", "avenger", "avenger2"];

console.log(cap);