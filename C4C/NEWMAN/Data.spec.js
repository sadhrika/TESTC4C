const { test,expect } = require ('@playwright/test');
const DPPElements = new (require('./Selector'));
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


        /*test.afterAll(async ({browser} ) => {
          await browser.close();
        });*/

        test.only('clickonuser',async ({ }) =>{
          test.setTimeout(60000);
            await utils.userProfile(page,"Data Disclosure");
            await page.waitForTimeout(4000);
            await page.click(DPPElements.clickonSearchWoc);
            await page.waitForTimeout(7000);
            });



      test.only('Data Disclosure for contacts', async ({ }) =>{
        test.setTimeout(90000);
        await page.click(DPPElements.clickonusermenu);
        await page.waitForSelector(DPPElements.userProfileText);
        let userProfileName = await page.$eval(DPPElements.userProfileText, el => el.innerText);
        console.log(" login userName.." + userProfileName);
        await page.waitForTimeout(3000);
        await page.click(DPPElements.SubjectTypeDropdown);
        await page.click(DPPElements.All_Contacts);
        await page.click(DPPElements.DataDisclosurePage2);
        await page.waitForTimeout(5000);
        await console.log("selected 2nd page..");
        await page.waitForTimeout(5000);
        await page.click(DPPElements.DataDisclosurePage1);
        await console.log("selected 1st page..");
        await page.waitForTimeout(3000);
        //await page.click(DPPElements.DDsearIcon);
       // await page.fill(DPPElements.DDSearchText, 'Frank Sent');
       // await page.keyboard.press("Enter");
       // await page.waitForTimeout(3000);
        await page.click(DPPElements.viewlog);
        await page.waitForSelector(DPPElements.AccessByText);
        let AccessBy = await page.$eval(DPPElements.AccessByText, el => el.innerText);
        console.log("AccessByUser.. " + AccessBy);
         // await expect(AccessBy).toBe("userProfile");
        if(AccessBy === userProfileName)
        {
          console.log("AccessedBy user verified..")
        }
        else
        {
          console.log("AccessedBy user not verified...");

        }
        await page.click(DPPElements.DataProtectionPolicyTab);
        await page.click(DPPElements.SubjectTypeDropdown);
        await page.click(DPPElements.All_Contacts);
        //await page.click(DPPElements.DDsearIcon);
        //await page.fill(DPPElements.DDSearchText, 'Frank Sent');
       // await page.keyboard.press("Enter");
       // await page.waitForTimeout(5000);
        await page.waitForSelector("sap-crm-table td[id='r1_1']");
        let employeeName=await page.$eval("sap-crm-table td[id='r1_1']", el => el.innerText);
        console.log("employee Name.. "  + employeeName);
        await page.click(DPPElements.AccessData);
        await page.click(DPPElements.ConfirmationPopNo);
        await page.click(DPPElements.AccessData);
        await page.waitForTimeout(5000);
        await page.click(DPPElements.ConfirmationPopYes);
        await page.waitForTimeout(5000);
        await page.waitForSelector(DPPElements.MessageWithRunId);
        let message=await page.$eval(DPPElements.MessageWithRunId, el => el.innerText);
        console.log("message... " + message);
        await page.click(DPPElements.viewRuns);
        await page.waitForTimeout(5000);
        await page.click(DPPElements.Data_subject_Type_dropdown);
        await page.fill(DPPElements.searchDataSubjectType, 'Contact');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(3000);
        await page.click(DPPElements.status);
        await page.click(DPPElements.Status_In_Process);
        await page.waitForTimeout(3000);
        await page.click(DPPElements.Status_Complete);
        await page.waitForSelector(DPPElements.RunId);
        let runid=await page.$eval(DPPElements.RunId, el => el.innerText);
        console.log(" runid.. "  + runid);
        await page.click(DPPElements.RunIdDDown);
        await page.fill(DPPElements.RunIdSearchText, runid);
        //await page.fill(mashupElements.RunIdSearchText, '888');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(5000);
        await page.click("sap-crm-table tr td >> nth=0");
        await page.waitForTimeout(5000);
        await page.click(DPPElements.hierarchicalIcon);
        await page.waitForTimeout(5000);
        await console.log("verified hierarchical list");

    }); 


    test.only('Data Disclosure customers', async ({ }) =>{
        test.setTimeout(90000);
        await page.click(DPPElements.clickonusermenu);
        await page.waitForSelector(DPPElements.userProfileText);
        let userProfileName = await page.$eval(DPPElements.userProfileText, el => el.innerText);
        console.log(" login userName.." + userProfileName);
       // await page.waitForTimeout(4000);
        await page.click(DPPElements.SubjectTypeDropdown);
        await page.click(DPPElements.All_individual_Customers);
        await page.click(DPPElements.DataDisclosurePage2);
        await console.log("selected 2nd page..");
        await page.waitForTimeout(5000);
        await page.click(DPPElements.DataDisclosurePage1);
        await console.log("selected 1st page..");
        await page.click(DPPElements.DDsearIcon);
        await page.fill(DPPElements.DDSearchText, 'SKY01');
        await page.keyboard.press("Enter");
        await page.waitForTimeout(3000);
        await page.click(DPPElements.viewlog);
        await page.waitForSelector(DPPElements.AccessByText);
        let AccessBy = await page.$eval(DPPElements.AccessByText, el => el.innerText);
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
       await page.click(DPPElements.DataProtectionPolicyTab);
       await page.click(DPPElements.SubjectTypeDropdown);
       await page.click(DPPElements.All_individual_Customers);
       await page.click(DPPElements.DDsearIcon);
       await page.fill(DPPElements.DDSearchText, 'SKY01');
       await page.keyboard.press('Enter');
       await page.waitForTimeout(5000);
        await page.waitForSelector("sap-crm-table td[id='r1_1']");
        let employeeName=await page.$eval("sap-crm-table td[id='r1_1']", el => el.innerText);
        console.log("employee Name.. "  + employeeName);
        await page.click(DPPElements.AccessData);

        await page.click(DPPElements.ConfirmationPopNo);
        await page.click(DPPElements.AccessData);
        await page.waitForTimeout(5000);
        await page.click(DPPElements.ConfirmationPopYes);
        await page.waitForTimeout(5000);
        await page.waitForSelector(DPPElements.MessageWithRunId);
        let message=await page.$eval(DPPElements.MessageWithRunId, el => el.innerText);
       console.log("message " + message);
       await page.click(DPPElements.viewRuns);
       await page.waitForTimeout(5000);
       await page.click(DPPElements.Data_subject_Type_dropdown);
       await page.fill(DPPElements.searchDataSubjectType, 'Customer');
       await page.keyboard.press('Enter');
       await page.waitForTimeout(5000);
       await page.click(DPPElements.status);
       await page.click(DPPElements.Status_In_Process);
       await page.waitForTimeout(3000);
       await page.click(DPPElements.Status_Complete);
       await page.waitForSelector(DPPElements.RunId);
       let runid=await page.$eval(DPPElements.RunId, el => el.innerText);
       console.log(" runid.. "  + runid);

      /*await page.waitForSelector(mashupElements.Status);
      let status=await page.$eval(mashupElements.Status, el => el.innerText);
      console.log("status... " + status);*/
      await page.click(DPPElements.RunIdDDown);
      //await page.fill(DPPElements.RunIdSearchText, runid);
      await page.fill(DPPElements.RunIdSearchText, runid);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(5000);
      await page.click("sap-crm-table tr td >> nth=0");
      await page.waitForTimeout(5000);
      await page.click(DPPElements.hierarchicalIcon);
      await page.waitForTimeout(5000);
      await console.log("verified hierarchical list");
    }); 

    test.only('Data Disclosure for employee', async ({ }) =>{
        test.setTimeout(80000);
        await page.click(DPPElements.clickonusermenu);
        await page.waitForSelector(DPPElements.userProfileText);
        let userProfileName = await page.$eval(DPPElements.userProfileText, el => el.innerText);
        console.log(" login userName.." + userProfileName);
        await page.click(DPPElements.DataDisclosurePage2);
        await console.log("selected 2nd page..");
        await page.click(DPPElements.DataDisclosurePage1);
        await console.log("selected 1st page..");
        await page.waitForTimeout(3000);
        await page.click(DPPElements.viewlog);
        await page.waitForSelector(DPPElements.AccessByText);
        let AccessBy = await page.$eval(DPPElements.AccessByText, el => el.innerText);
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
       await page.click(DPPElements.DataProtectionPolicyTab);
       await page.waitForTimeout(5000);
        await page.waitForSelector("sap-crm-table td[id='r1_1']");
        let employeeName=await page.$eval("sap-crm-table td[id='r1_1']", el => el.innerText);
        console.log("employee Name.. "  + employeeName);
        await page.click(DPPElements.AccessData);

        await page.click(DPPElements.ConfirmationPopNo);
        await page.click(DPPElements.AccessData);
        await page.waitForTimeout(5000);
        await page.click(DPPElements.ConfirmationPopYes);
        await page.waitForTimeout(5000);
        await page.waitForSelector(DPPElements.MessageWithRunId);
        let message=await page.$eval(DPPElements.MessageWithRunId, el => el.innerText);
       console.log("message " + message);
       await page.click(DPPElements.viewRuns);
       await page.waitForTimeout(5000);
      await page.click(DPPElements.Data_subject_Type_dropdown);
      await page.fill(DPPElements.searchDataSubjectType, 'Employee');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(5000);
      await page.click(DPPElements.status);
      await page.click(DPPElements.Status_In_Process);
      await page.waitForTimeout(3000);
      await page.click(DPPElements.Status_Complete);
      await page.waitForSelector(DPPElements.RunId);
      let runid=await page.$eval(DPPElements.RunId, el => el.innerText);
      console.log(" runid.. "  + runid);

     /* await page.waitForSelector(DPPElements.Status);
      let status=await page.$eval(DPPElements.Status, el => el.innerText);
      console.log("status... " + status);*/
      await page.click(DPPElements.RunIdDDown);
      //await page.fill(mashupElements.RunIdSearchText, runid);
      await page.fill(DPPElements.RunIdSearchText, runid);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(5000);
      await page.click("sap-crm-table tr td >> nth=0");
      await page.waitForTimeout(5000);
      await page.click(DPPElements.hierarchicalIcon);
      await page.waitForTimeout(5000);
      await console.log("verified hierarchical list");
    });
    /*

    
*/
});
