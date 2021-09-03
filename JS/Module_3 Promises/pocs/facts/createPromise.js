// implementation -> polyfill
// fs.promises.readFile -> polyfill
function myPromisifiedReader(filePath) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, function cb(err, data) {
            if(err) {
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}


// consumer
console.log("Before");
let freedPromise = myPromisifiedReader("f1.txt");
console.log("promise", freedPromise);
// promise -> resolve -> data
// function pass -> resolve
freedPromise.then(function cb(data) {
    console.log("data"+data);
})
// function pass -> reject
freedPromise.catch(function cb(err) {
    console.log("error"+err);
})
console.log("After");