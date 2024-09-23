class CartPage {

    constructor (page)
    {

        this.page = page;

        this.cartPageName = page.locator('xpath=//*[@id="tbodyid"]/tr/td[2]'); 
        this.cartPagePrice = page.locator('xpath=//*[@id="tbodyid"]/tr/td[3]');
        this.cartPageTotalPrice = page.locator('.panel-title');
        

    }

    async getCartName()
    {
        await this.page.waitForLoadState('networkidle');
        return this.cartPageName.textContent();

    }
    async getCartPrice()
    {
        await this.page.waitForLoadState('networkidle');
        return await this.cartPagePrice.textContent();

    }

    async getCartTotal()
    {
        await this.page.waitForLoadState('networkidle');
        return await this.cartPageTotalPrice.textContent();

    }

}

module.exports = {CartPage};