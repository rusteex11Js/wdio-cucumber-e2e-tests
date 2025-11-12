import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

Given(/^Google page is opened$/, async function () {
    console.log('before opening browser....');
    await browser.url("http://automationpractice.pl/index.php")
    await browser.pause(5000);
    // await browser.debug()
    console.log('after opening browser....');
})

When(/^Search wth (.*)$/, async function (searchItem) {
    console.log(`searchItem ${searchItem}`);
    let ele = $(`[name='search_query']`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first search result$/, async function () {
    let ele = $(`[class="product_img_link"]`)
    await ele.click()
})

Then(/^URL should match (.*)$/, async function (expectedURL) {
    console.log(`searchItem ${expectedURL}`);
    let url = await browser.getUrl()
    expect(url).to.equal(expectedURL)
})

Given(/^A Web page is opened (.*)$/, async function (url:string) {
    await browser.url(url)
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    await browser.maximizeWindow()
})

Then(/^perform web interactions$/, async function () {
    /** 
     * Input box:
     * Actions:
     * type into input box
     * clear the field and type or just addvalue
     * click and type
     * slow typing
    */

    let element = await $(`[type=number]`)
    await element.moveTo()
    /**
     * setValue will clear and add the value
    */
    // await element.setValue("12344")
    /**
     * addValue will add the value without clearing
     */
    // await element.addValue("007");

    let num = 21345;
    let strNum = num.toString();

    await element.click();

    for(let i = 0; i < strNum.length; i++){
        let charStr = strNum.charAt(i);
        await browser.pause(1000)
        await browser.keys(charStr)
    }
})


