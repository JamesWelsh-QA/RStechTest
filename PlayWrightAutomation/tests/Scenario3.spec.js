/*
Scenario 3 example: Validate Search Functionality

Go to Homepage: Ensure the script starts at the homepage.
Search for an Item: Enter a search term like "Laptop" in the search box and submit the search.
Verify Results: Ensure that the search results page shows items related to the search query.

Assertions:
Verify that at least one result is returned for the search.
Assert that the search term appears in the search results.
*/

const {test, expect} = require('@playwright/test');
const {POManager} = require('../PageObjects-PLT/POManager');

const url = "https://www.prettylittlething.com/";
const searchTerm = 'Dress'; //'Dress' for happy path ////// 'Laptop for sad path'


test('Search Funcitonality Test', async ({page})=>
    {

      const poManager = new POManager(page);

      const browserSetup = poManager.getBrowserSetup(),
      search = poManager.getSearchBar(),
      plp = poManager.getPLP();

       // go to site
       await browserSetup.invokeBrowser(url);
       await expect(page).toHaveTitle("Women's Fashion Clothing & Dresses | PrettyLittleThing");

       // cookie banner
       await poManager.cookieBannerAccept();

       // search for product
       await search.enterToSearchBox(searchTerm);

       // click search
       await search.clickSearch();
       
       // check products are showing
       await page.locator("//*[@id='plp-product-card-CNG8806']/div[2]/div[2]/h3").first().waitFor();
       const bool = page.locator("//*[@id='plp-product-card-CNG8806']/div[2]/div[2]/h3").isVisible;
       expect(bool).toBeTruthy();

       /* should have a if statement here to use another search term if no results
       were found, could do this by sotring a array of search terms and looping
       through until a search result is found */

       //check product contains search term
      await expect(page.locator("//*[@id='plp-product-card-CNG8806']/div[2]/div[2]/h3")).toContainText(searchTerm);
    });