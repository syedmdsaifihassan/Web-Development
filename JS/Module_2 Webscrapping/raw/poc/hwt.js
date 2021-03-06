// Highest Wicket taker -> name

// npm i request
let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');

// data extract -> cheerio
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
    let headingsArr = searchTool(".table.bowler tbody tr td");
    for(let i = 0; i <headingsArr.length; i++){
        // console.log(headingsArr[i]);
    }

    let max = 0;
    let hwtName = "";
    for(let i=0; i<bowlers.length; i++) {
        let cols = searchTool(bowlers[i]).find("td");
        // name of bowler
        let name = searchTool(cols[0]).text();
        // let name = searchTool(cols[0]).html();
        // wicket taken by the bowler
        let wicket = searchTool(cols[4]).text();
        // let wicket = searchTool(cols[4]).html();
        // console.log(wicket);
        // console.log(name+" --- "+wicket);

        if(max<wicket){
            max = wicket;
            hwtName = name;
        }
    }
    console.log("---Highest Wicket taker---")
    console.log(hwtName+" --- "+max);
}

console.log("After");