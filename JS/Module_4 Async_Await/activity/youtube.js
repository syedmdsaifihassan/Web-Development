// a. Name of Playlist,view
// b. Total No of videos : 792
// c. actual No of videos :783
// d. Total length of playlist : 12 hours, 9 minutes, 12 seconds

        // At 1.25x : 9 hours, 43 minutes, 21 seconds
        // At 1.50x : 8 hours, 6 minutes, 8 seconds
        // At 1.75x : 6 hours, 56 minutes, 41 seconds
        // At 2.00x : 6 hours, 4 minutes, 36 seconds
        // Average length of video : 29 minutes, 10 seconds

// e. console.table => of video number,name,time

// Current Task : name of playlist ,views,total videos

const puppeteer = require('puppeteer');
let page;
(async function fn(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-fullscreen"]
    })
    page = await browser.newPage();
    await page.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq");
    // await page.goto("https://www.youtube.com/playlist?list=PLpbPLDjlfpaCfGPueEbkHWdwxlVXmJeug");

    await page.waitForSelector('h1[id="title"]');
    // first element
    let element = await page.$('h1[id="title"]');
    function cb(element) {
        return element.textContent;
    }
    let value = await page.evaluate(cb, element);
    console.log("Title: ", value);

    // all occurences
    let someList = await page.$$(".style-scope.ytd-playlist-sidebar-primary-info-renderer");
    value = await page.evaluate(
        function(element) {return element.textContent;}, someList[5]);
    console.log("Videos: ", value);
    let totalVideos = value.split(" ")[0].trim();

    // no. of views
    value = await page.evaluate(
        function(element) {return element.textContent;}, someList[6]);
    console.log("Views: ", value);

    // list first 100 videos console.table=> video no., name, time
    // let videoNoArr = await page.$$('div[id="index-container"]');
    // let videoArr = await page.$$('a[id="video-title"]');
    // let videoTimeArr = await page.$$('span[aria-label]');
    // const videoDetails = [];
    // for(let i=0; i<100; i++){
    //     let listObj = {};
    //     listObj.Video_No = (await page.evaluate(
    //         function(element) {return element.textContent;}, videoNoArr[i])).trim();

    //     listObj.Video_Name = (await page.evaluate(
    //         function(element) {return element.textContent;}, videoArr[i])).trim();

    //     listObj.Video_Time = (await page.evaluate(
    //         function(element) {return element.textContent;}, videoTimeArr[i])).trim();
        
    //     videoDetails.push(listObj)
    // }
    // console.table(videoDetails);


    // all videos load
    let loopCount = Math.floor(totalVideos/100);
    for(let i=0; i<loopCount; i++) {
        // loading start
        await page.click(".circle.style-scope.tp-yt-paper-spinner");
        // loading finished
        await waitTillHTMLRendered(page);
        console.log("Loaded the new Videos");
    }

    // loader -> scroll
    let videoArr = await page.$$('a[id="video-title"]');
    // last video
    let lastVideo = videoArr[videoArr.length - 1];
    // last video view
    await page.evaluate(function(element){
        return element.scrollIntoView();
    },lastVideo);
    // video time
    await page.waitFor(3000);
    let videoTimeArr = await page.$$('span[aria-label]');
    let videosDetails = [];
    for(let i=0; i<videoArr.length; i++){
        let timeAndTitleObj = await page.evaluate(getTimeAndTitle, videoTimeArr[i], videoArr[i]);
        videosDetails.push(timeAndTitleObj);
    }
    console.table(videosDetails);


})();

function getTimeAndTitle(element1, element2){
    return{
        time: element1.textContent.trim(),
        titile: element2.textContent.trim()
    }
}

const waitTillHTMLRendered = async (page, timeout=10000) => {
    const checkDurationMsecs = 1000;
    const maxChecks = timeout/checkDurationMsecs;
    let lastHTMLSize = 0;
    let checkCount = 1;
    let countStableSizeItr = 0;
    let minStableSizeItr = 3;

    while(checkCount++ <= maxChecks){
        // html
        let html = await page.content();
        let currentHTMLSize = html.length;
        // body part
        // let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);
        // console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, " body html size: ", bodyHTMLSize);
        console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize);

        if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
            countStableSizeItr++;
        else
            countStableSizeItr = 0; //reset the counter

        if (countStableSizeItr >= minStableSizeItr) {
            console.log("Page rendered fully...");
            break;
        }

        lastHTMLSize = currentHTMLSize;
        await page.waitFor(checkDurationMsecs);
    }
};