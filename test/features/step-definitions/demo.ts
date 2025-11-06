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
