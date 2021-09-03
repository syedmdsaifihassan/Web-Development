let puppeteer = require('puppeteer');

let browStrtPromise = puppeteer.launch({
    headless: false,
    // slowMo: 1000,
    defaultViewport: null,
    args: ["--start-maximized", "--disable-notifications"]
});

let page, browser, rTab;
browStrtPromise
    .then(function (browserObj){
        console.log("Browser Opened");
        browser = browserObj;
        let browOpenTabPromise = browserObj.newPage();
        return browOpenTabPromise;
    }).then(function (newTab){
        page = newTab;
        console.log("new tab opened");
        let googlePagePromise = newTab.goto("https://www.google.com/");
        return googlePagePromise;
    }).then(function (){
        console.log("google home page opened");
        // keyboard -> data entry
        let waitForTypingPromise = page.type("input[title='Search']", "pepcoding");
        return waitForTypingPromise;
    }).then(function(){
        // keyboard -> specific keys 
        let enterKeyPromise = page.keyboard.press('Enter', {delay: 100});
        return enterKeyPromise;
    }).then(function(){
        // wait for the page to be visible
        let waitForElemPromise = waitAndClick(".LC20lb.DKV0Md", page);
        return waitForElemPromise;
    })

    // modal close, but modal is not available on this site that's why we are commenting this
    // .then(function(){
    //     // modal esc
    //     let waitForModalPromise = page.waitForSelector(".col.l1.s1", {delay: 100});
    //     return waitForModalPromise;
    // }).then(function (){
    //     // mouse function
    //     let clickModalPromise = page.click(".col.l1.s1");
    //     return clickModalPromise;
    // })

    // modal close, but modal is not available on this site that's why we are handling handleIfNotPresent
    .then(function (){
        let wcPromise = handleIfNotPresent(".col.l1.s1", page);
        console.log("wcPromise", wcPromise);
        return wcPromise;
    })
    .then(function (){
        // page element -> cheerio
        let allPromise = page.$$(".site-nav-li");
        return allPromise;
    })

    .then(function(allElem){
        // Resource Select
        let elemPromise = allElem[7].click({delay: 100});
        return elemPromise;
    })
    // .then(function (){
    //     let waitPromise = page.waitFor(200);
    //     return waitPromise;
    // })
    // resource tab is on next tab and will take some time to open
    .then(function (){
        let time2Sec = Date.now()+2000;
        while(Date.now() < time2Sec) {

        }
        let listOfOpenTabPromise = browser.pages();
        return listOfOpenTabPromise;
    })
    .then(function(array){
        // array of Resource pages
        rTab = array[array.length-1];
        let waitForLev1Promise = waitAndClick('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]', rTab);
        return waitForLev1Promise;
    })
    .then(function (){
        console.log("Level 1 opened");
    })


// user defined promise based fucntion -> it will return a promise that will be
// resolved when the user has waited for the element to appear as well as we have clicked on it.
function waitAndClick(selector, cPage) {
    return new Promise(function (resolve, reject) {
        let waitForModalPromise = cPage.waitForSelector(selector, { visible: true });
        waitForModalPromise
            .then(function () {
                let clickModal =
                    cPage.click(selector, { delay: 100 });
                return clickModal;
            }).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err)
            })
    }
    )
}

// promise -> banner is present or not -> the code will run
function handleIfNotPresent(selector, cPage) {
    return new Promise(function (resolve, reject) {
        // wait clickModal
        let waitAndClickPromise = waitAndClick(selector, cPage);
        waitAndClickPromise.then(function () {
            resolve();
        })
        waitAndClickPromise.catch(function (err) {
            resolve();
        })
    })
}

// browser.pages -> array of all the open tabs

// .then(function(array){
//     rTab = array[array.length-1];
//     let urlPromise = rTab.url();
//     return urlPromise;
// })
// .then(function(url){
//     console.log(url);
// })