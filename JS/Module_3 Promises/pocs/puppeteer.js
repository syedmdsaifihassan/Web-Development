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
        let waitForElemPromise = page.waitForSelector(".LC20lb.DKV0Md", {visible: true});
        return waitForElemPromise;
    }).then(function (){
        // mouse function
        let elemClickPromise = page.click(".LC20lb.DKV0Md");
        return elemClickPromise;
    }).then(function(){
        // modal esc
        let waitForModalPromise = page.waitForSelector(".col.l1.s1", {delay: 100});
        return waitForModalPromise;
    }).then(function (){
        // mouse function
        let clickModalPromise = page.click(".col.l1.s1");
        return clickModalPromise;
    }).then(function(){
        // Resource Select
        let allPromise = page.waitForSelector(".site-nav-li:nth-child(7)", {delay: 100});
        return allPromise;
    }).then(function (){
        // mouse function
        let clickResource = page.click(".site-nav-li:nth-child(7)", {delay: 100});
        return clickResource;
    }).then(function (){
        let waitPromise = page.waitFor(200);
        return waitPromise;
    })
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
        let waitForLev1Promise = rTab.waitForSelector('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]', {visible: true});
        return waitForLev1Promise;
    }).then(function() {
        // click Lev 1
        let clickLev1Promise = rTab.click('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]');
        return clickLev1Promise;
    }).then(function (){
        console.log("Level 1 will be opened");
    })

    // browser pages -> array of all open tabs