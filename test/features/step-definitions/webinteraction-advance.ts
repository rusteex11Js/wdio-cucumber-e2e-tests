
import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";

Given(/^launch the Application (.*)$/, async (url) => {
    /**
     * Lauch the application 
    */
    await browser.url(url);
    await browser.setTimeout({ implicit: 10000, pageLoad: 10000 });
    await browser.maximizeWindow();
})

When(/^Inventory page should list (.*)$/, async (number) => {
    let elArr = $$(`[class='mb-2 card-title h5']`);
    let count = await elArr.length;
    await expect(count).to.equal(parseInt(number))
})

/**
 * Get Price list
 * convert string to number
 */

Then(/^Validate all products have valid price$/, async () => {
    let elArr = $$(`[class='mb-3 text-muted card-subtitle h6']`);

    let pricecountList = await elArr.length
    let priceValueArr = [];

    for(let i = 0;i <pricecountList; i++){
        let priceStr =  await elArr[i].getText();
        let priceValue = priceStr.replace(/\D+/g, '');        
        priceValueArr.push(priceValue);
    }

    console.log(`>> Price with ${priceValueArr}`)
    
    let priceNumberArr = priceValueArr.map(ele => parseInt(ele))
    console.log(`>> price in number ${priceNumberArr}`)

    let invalidAmount = priceNumberArr.filter(ele => ele <= 0);
    console.log(`invalid price ${invalidAmount}`);

    expect(invalidAmount.length).to.equal(0);
})
