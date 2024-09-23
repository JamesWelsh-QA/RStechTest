const {BrowserSetup} = require('../PageObjects-BrowserSetup/BrowserSetup');
const {PLP} = require('../PageObjects-PLT/PLP');
const {SearchBar} = require('../PageObjects-PLT/SearchBar');

class POManager
{

    constructor(page)
    {
        this.page = page;

        this.browserSetup = new BrowserSetup(page);
        this.plp = new PLP(page);
        this.search = new SearchBar(page);

        this.cookieBanner = this.page.locator('#onetrust-accept-btn-handler');

    }

getBrowserSetup()
{
    return this.browserSetup;
}

getSearchBar()
{
    return this.search;
}

getNavBar()
{
    return this.navBar;
}

getPLP()
{
    return this.plp;
}

async cookieBannerAccept()
{
    await this.cookieBanner.click();
}

}

module.exports = {POManager};