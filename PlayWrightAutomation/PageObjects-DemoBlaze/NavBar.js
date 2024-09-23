class NavBar {

    constructor (page)
    {

        this.page = page;

        this.cartButton = page.locator('#cartur');
        this.contactButton = page.locator('xpath=//*[@id="navbarExample"]/ul/li[2]/a');

    }


    async goToCart()
    {
       await this.page.waitForLoadState('networkidle');
       await this.cartButton.click();
       await this.page.waitForLoadState('networkidle');
    }

    async goToContactUs()
    {
        await this.page.waitForLoadState('networkidle');
        await this.contactButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {NavBar};