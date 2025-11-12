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

Then(/^perform web interactions drop down$/, async function () {
    /** 
     * Drop down:
     * Actions:
     * Assert default option is selected
     * Select by attribute, text, index
     * get a list of options
    */

    await browser.pause(2000);

    /**
     * Validate the selected value
     */
    // let element =  $(`//select/option[@selected="selected"]`)
    // let value = await element.getText();
    // console.log(value)
    // expect(value).to.equal("Please select an option")

    //select a specific option
    // let ddEle = $(`#dropdown`)
    // await ddEle.selectByVisibleText("Option 1");

    // await browser.pause(2000);
    // await ddEle.selectByAttribute("value","2");

    // await browser.pause(2000);
    // await ddEle.selectByIndex(1);

    /**
     * Get list of options in the drop down
     */

    let eleArr = $$(`select[id='dropdown'] > option`)
    let size = await eleArr.length;
    let arr =[];

   for(let i = 0; i < size; i++){
    let ele = eleArr[i];
    let val = ele.getText();
    arr.push(val);
   }

   console.log(`>> Options Array: ${arr} `)
    
})

When(/^perform web interactions checkboxes$/, async function () {
    /** 
     *check boxes:
     * Actions:
     * Assert default option is selected
     * Select by attribute, text, index
     * get a list of options
    */

    await browser.pause(2000);

    let element = $(`//form[@id="checkboxes"]/input[1]`)
    let isChecked = await element.isSelected();
    expect(isChecked).to.true
  
})


When(/^perform web interactions handling windows$/, async function () {
    /** 
     *4.Windows handling
     * steps:
     * 1.launch the browser
     * 2.open another windows
     * 3.switch to the window based on title
     * 4.switch backt to the main window
     * 
     * 
     * Methods used:
     * 1.getTitle()
     * 2.getWindowHandle()
     * 3.getWindowHandles()
     * 4.switchToWindow()
    */

   await browser.pause(2000)

   let element1 = $(`=Click Here`)
   let element2 = $(`=Elemental Selenium`)

   await element1.click();
   await element2.click();

   let currentWindowTitle =  await browser.getTitle();
   let parentWinHandle = await browser.getWindowHandle();
   console.log(`current window Title: ${currentWindowTitle}`)

   //switch to specifi window
   let winHandles =  await browser.getWindowHandles();
   for(let i = 0; i < winHandles.length; i++){
      console.log(`>> win handle: ${winHandles[i]}`);

      await browser.switchToWindow(winHandles[i])
      currentWindowTitle = await browser.getTitle();

      if(currentWindowTitle === "Home | Elemental Selenium"){
           await browser.switchToWindow(winHandles[i])
           let headerTextEleSel = await $(`<h1>`).getText();
           console.log(`headerTextEleSel: ${headerTextEleSel}`)
           // do business logic
           break;
      }
   }

   //Switch back to parent window

   await browser.switchToWindow(parentWinHandle);
   let parentWinHeaderText = await $(`<h3>`).getText();

   console.log(`>> parent window header text: ${parentWinHeaderText}`)
   // continue with rest of the execution
   
})

