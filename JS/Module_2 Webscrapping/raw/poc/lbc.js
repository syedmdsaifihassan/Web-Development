// Last Ball Commentary

// npm i request
let request = require('request');
let cheerio = require('cheerio');

// data extract -> cheerio
console.log("Before");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";
request(url, cb);

function cb(error, response, html) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    if(error) {
        console.log('error:', error); // Print the error message if occured.
    }else if(response.statusCode == 404){
        console.log("Page not found");
    }else{
        // console.log(html); // Print the HTML for the request made
        dataExtract(html);
    }
}

function dataExtract(html) {
    // search tool
    let searchTool = cheerio.load(html);
    // css selector -> elem
    let elementArr = searchTool(".match-comment-wrapper .match-comment-long-text");
    // text
    let lbc = searchTool(elementArr[0]).text();
    console.log("lbc", lbc);
}

console.log("After");