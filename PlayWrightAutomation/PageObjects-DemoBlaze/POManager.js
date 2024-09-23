const {BrowserSetup} = require('../PageObjects-BrowserSetup/BrowserSetup');
const {PLPpage} = require('../PageObjects-DemoBlaze/PLPpage');
const {PDPpage} = require('../PageObjects-DemoBlaze/PDPpage');
const {NavBar} = require('../PageObjects-DemoBlaze/NavBar');
const {CartPage} = require('../PageObjects-DemoBlaze/CartPage');
const {ContactUs} = require('../PageObjects-DemoBlaze/ContactUs');

class POManager
{

    constructor(page)
    {
        this.page = page;

        this.browserSetup = new BrowserSetup(page);
        this.plp = new PLPpage(page);
        this.pdp = new PDPpage(page);
        this.navBar = new NavBar(page);
        this.cart = new CartPage(page);
        this.contact = new ContactUs(page);
        
    }

getBrowserSetup()
{
    return this.browserSetup;
}

getPLPpage()
{
    return this.plp;
}

getPDPpage()
{
    return this.pdp;
}

getNavBar()
{
    return this.navBar;
}

getCartPage()
{
    return this.cart;
}

getContactPage()
{
    return this.contact;
}

}

module.exports = {POManager};