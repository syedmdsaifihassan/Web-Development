// Age of the players

// npm i request
let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');

// data extract -> cheerio
let bowlersArr = [];
let bowlersCount = 0;
console.log("Before");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";

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

// function dataExtract(html) {
//     // search tool
//     let searchTool = cheerio.load(html);
//     // css selector -> elem
//     let bowlerTables = searchTool(".table.bowler");
//     let data = "";
//     for(let i=0; i<bowlerTables.length; i++) {
//         let tableData = searchTool(bowlerTables[i]).html();
//         data += tableData;
//     }
//     fs.writeFileSync("table.html", data);
// }

function dataExtract(html) {
    // search tool
    let searchTool = cheerio.load(html);
    // css selector -> elem
    // bowlers table
    let bowlers = searchTool(".table.bowler tbody tr");

    for(let i=0; i<bowlers.length; i++) {
        let cols = searchTool(bowlers[i]).find("td");
        if(cols.length > 1) {
            bowlersCount++;
        }
    }

    let max = 0;
    let hwtName = "";
    for(let i=0; i<bowlers.length; i++) {
        let cols = searchTool(bowlers[i]).find("td");
        let aElem = searchTool(cols[0]).find("a");
        let link = aElem.attr("href");
        // link
        // new page -> link get -> complete -> request
        let fullLink = `https://www.espncricinfo.com${link}`;
        // console.log(fullLink);
        request(fullLink, newcb);
    }

}

function newcb(error, response, html) {
    if(error) {
        console.log('error:', error); // Print the error message if occured.
    }else if(response.statusCode == 404){
        console.log("Page not found");
    }else{
        // console.log(html); // Print the HTML for the request made

        // food
        getBirthday(html);
        // check
        if(bowlersArr.length == bowlersCount){
            console.table(bowlersArr);
        }
    }
}

function getBirthday(html){
    // search tool
    let searchTool = cheerio.load(html);
    let headingsArr = searchTool('.player-card-description');
    let name = searchTool(headingsArr[0]).text();
    let age = searchTool(headingsArr[2]).text();
    // console.log(name+" --- "+age);
    bowlersArr.push({name, age});
}

console.log("After");
