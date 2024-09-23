/*
Scenario 1 example: Add Items to Cart and Verify Total

Go to Homepage: The test should navigate to the home page of the website.
Select a Category: For example, in the demo store, select "Laptops."
Select an Item: Select a specific item, such as the "Sony Vaio i5."
Add the Item to Cart: Click the "Add to Cart" button.
Navigate to Cart: Click the cart button to go to the shopping cart page.
Verify the Item: Ensure that the item added to the cart is present and the price is correct.

Assertions:
Ensure the item name and price are correctly displayed in the cart.
Assert the total cost in the cart.
*/

const {test, expect} = require('@playwright/test');
const {POManager} = require('../PageObjects-DemoBlaze/POManager');

//variables
const url = "https://www.demoblaze.com/";
const category = 'Laptops';
const product = "Dell i7 8gb";

test('Add To Cart Test', async ({page})=>
   {

       //constructors
       const poManager = new POManager(page);

       const browserSetup = poManager.getBrowserSetup(),
       plp = poManager.getPLPpage(),
       pdp = poManager.getPDPpage(),
       navBar = poManager.getNavBar(),
       cart = poManager.getCartPage();

       //invoke browser
       await browserSetup.invokeBrowser(url);
       await expect(page).toHaveTitle('STORE');

       //PLP
       await plp.selectCategory(category);
       await page.waitForTimeout(5000); //test breaks without this
       await plp.selectProduct(product);
       await page.waitForTimeout(5000); //test breaks without this
        
       //PDP
       await page.waitForTimeout(5000);
       const pdpName = await pdp.getPdpName();
       const pdpPrice = await pdp.getPdpPrice();
       await pdp.addProduct();
       await page.waitForTimeout(5000);
       
       //go to cart
       await navBar.goToCart();

       //assert product has been added
       await page.locator(".success").first().waitFor();
       const bool = page.locator('.success').isEnabled;
       expect(bool).toBeTruthy();
    
       //store product name and value displayed on cart
    
       const cartName = await cart.getCartName();
       const cartPrice = await cart.getCartPrice();
       const cartTotalPrice = await cart.getCartTotal();


       //assert values from cart with values store from pdp
       expect(pdpName).toBe(cartName);
       expect(pdpPrice).toBe(cartPrice);
       expect(pdpPrice).toBe(cartPrice);
       expect(cartPrice).toBe(cartPrice);
   

    

       
   });

   