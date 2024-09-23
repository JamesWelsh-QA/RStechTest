/*
Scenario 2 example: Fill in Contact Form

Navigate to Contact Page: Click on the "Contact" link from the menu.
Fill in Form Fields: Automate filling in the fields for:
Email (e.g., test@example.com)
Name (e.g., John Doe)
Message (e.g., This is a test message.)
Send the Message: Click the "Send Message" button.
Verify Confirmation: Capture and assert any confirmation message or alert that appears.

Assertions:
Ensure that a confirmation alert or message is displayed after sending the form.
*/

const {test, expect} = require('@playwright/test');
const {POManager} = require('../PageObjects-DemoBlaze/POManager');

//variables
const url = "https://www.demoblaze.com/";
const email = "james@test";
const name = "james";
const message = "Could use lorem ipsum but why not just put a load of random characters sdhfdshdfesuhfsehfh :)";

test('Contact Form Test', async ({page})=>
    {

      //constructors
      const poManager = new POManager(page),
      contactForm = poManager.getNavBar(),
      contactUs = poManager.getContactPage();

      const browserSetup = poManager.getBrowserSetup();
      
      //invoke browser
       await browserSetup.invokeBrowser(url);
       await expect(page).toHaveTitle('STORE');

      //go to contact form
       await contactForm.goToContactUs();

       //enter email
       await contactUs.enterEmail(email);

       //enter name
       await contactUs.enterName(name);


       //enter message
       await contactUs.enterMessage(message);

       //send form
       await contactUs.sendForm();

       //assert alert text
       page.on('dialog', async dialog =>{
       expect(dialog.message()).toContain('Thanks for the message!!');
       });

       //accept alert
       await contactUs.acceptAlert();

       //assert confirmation message
       await expect(page.locator('#exampleModal')).toHaveAttribute('aria-hidden','true');


    });