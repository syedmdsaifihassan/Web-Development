let fs = require('fs');
// request
let axios = require('axios');
// file name with f1 will be read
let pPromise =  fs.promises.readFile("f1.txt");
// Hello F2 will be written into f2
fs.promises.readFile("f2.txt", "Hello F2");

let resPromise = axios.get("https://jsonplaceholder.typicode.com/users");
pPromise.then(function (result) {
    console.log("Result of fileReadPromise: "+result)
})
resPromise.then(function (response) {
    console.log("axios", response.result);
})
