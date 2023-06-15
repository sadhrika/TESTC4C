const { test,expect } = require ('@playwright/test');
const EXTData = new (require('./Selector'));
const utils = new (require('./utils'));
let page;


let innerText;

test.describe('Dpp Test', () => {
test.beforeAll(async ( {browser} ) => {
page = await browser.newPage();
page.setViewportSize({ width: 1250, height: 600 });
await utils.Staginglogin(page, "user.na", "-3#7Ea4Z?aw*LS3I7");
await page.waitForTimeout(10000);
});

test.only('clickonuser',async ({ }) =>{
test.setTimeout(60000);
await utils.userProfile(page,"Data Disclosure");
await page.waitForTimeout(4000);
await page.click(EXTData.clickonSearchWoc);
await page.waitForTimeout(7000);
});


test.only('Data Disclosure for String  DataTypes', async ({ }) =>{
    test.setTimeout(80000);
    await page.click(EXTData.clickonusermenu);
    await page.waitForSelector(EXTData.userProfileText);
    let userProfileName = await page.$eval(EXTData.userProfileText, el => el.innerText);
    console.log(" login userName.." + userProfileName);
    await page.click(EXTData.DataDisclosurePage2);
    await console.log("selected 2nd page..");
    await page.click(EXTData.DataDisclosurePage1);
    await console.log("selected 1st page..");
    await page.waitForTimeout(3000);
    await page.click(EXTData.viewlog);
    await page.waitForSelector(EXTData.AccessByText);
    let AccessBy = await page.$eval(EXTData.AccessByText, el => el.innerText);
    console.log("AccessUser.. " + AccessBy);
   // await expect(AccessBy).toBe("userProfile");
   if(AccessBy === userProfileName)
   {
    console.log("AccessedBy user verified..")
   }
   else
   {
    console.log("AccessedBy user not verified...");

   }
   await page.click(EXTData.DataProtectionPolicyTab);
   await page.waitForTimeout(5000);
    await page.waitForSelector("sap-crm-table td[id='r1_1']");
    let employeeName=await page.$eval("sap-crm-table td[id='r1_1']", el => el.innerText);
    console.log("employee Name.. "  + employeeName);
    await page.click(EXTData.AccessData);

    await page.click(EXTData.ConfirmationPopNo);
    await page.click(EXTData.AccessData);
    await page.waitForTimeout(5000);
    await page.click(EXTData.ConfirmationPopYes);
    await page.waitForTimeout(5000);
    await page.waitForSelector(EXTData.MessageWithRunId);
    let message=await page.$eval(EXTData.MessageWithRunId, el => el.innerText);
   console.log("message " + message);
   await page.click(EXTData.viewRuns);
   await page.waitForTimeout(5000);
  await page.click(EXTData.Data_subject_Type_dropdown);
  await page.fill(EXTData.searchDataSubjectType, 'Employee');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.click(EXTData.status);
  await page.click(EXTData.Status_In_Process);
  await page.waitForTimeout(3000);
  await page.click(EXTData.Status_Complete);
  await page.waitForSelector(EXTData.RunId);
  let runid=await page.$eval(EXTData.RunId, el => el.innerText);
  console.log(" runid.. "  + runid);

 /* await page.waitForSelector(DPPElements.Status);
  let status=await page.$eval(DPPElements.Status, el => el.innerText);
  console.log("status... " + status);*/
  await page.click(EXTData.RunIdDDown);
  //await page.fill(mashupElements.RunIdSearchText, runid);
  await page.fill(EXTData.RunIdSearchText, runid);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  await page.click("sap-crm-table tr td >> nth=0");
  await page.waitForTimeout(5000);
  await page.click(EXTData.hierarchicalIcon);
  await page.waitForTimeout(5000);
  await console.log("verified hierarchical list");
});

});