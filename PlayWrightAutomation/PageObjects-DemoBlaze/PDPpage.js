class PDPpage {

constructor (page)
{
    this.page = page;

    this.name = page.locator('.name');
    this.price = page.locator('.price-container');
    this.addToBag = page.locator('.btn-lg');
}

async getPdpName()
{
    await this.page.waitForLoadState('networkidle');
    return await this.name.textContent();
}  

async getPdpPrice()
{
    await this.page.waitForLoadState('networkidle');
    return (await this.price.textContent()).split('*')[0].trim().split('$')[1];
}  

async addProduct()  
{
    await this.page.waitForLoadState('networkidle');
    await this.page.locator('xpath=//*[@id="tbodyid"]/div[2]/div/a').click();

    //await this.addToBag.click();
    await this.page.on('dialog', dialog => dialog.accept());
    await this.page.waitForLoadState('networkidle');

}

}

module.exports = {PDPpage};