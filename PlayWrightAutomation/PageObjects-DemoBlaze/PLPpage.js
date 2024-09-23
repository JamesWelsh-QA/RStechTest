class PLPpage {

constructor (page)
{
    this.page = page;

    //cateogory navigation
    this.categories = page.locator("#itemc");

    //product navigation
    this.products = page.locator('.card-title');
    
}

async selectCategory(category)
{
    
    await this.page.waitForLoadState('networkidle');
    const count = await this.categories.count();

    for (let i = 0; i < count; ++i)
        {
         if (await this.categories.nth(i).textContent() === category)
         {
             await this.categories.nth(i).click();
             break; 
 
        };

        }

    await this.page.waitForLoadState('networkidle');
}

async selectProduct(product)
{
    await this.page.waitForLoadState('networkidle');
    const productCount = await this.products.count();


    for (let j = 0; j < productCount; ++j)
        {
         if (await this.products.nth(j).textContent() === product)
         {
             await this.products.nth(j).locator('xpath=//a').click();
             break;
         }
 
        };

    await this.page.waitForLoadState('networkidle');

}

}

module.exports = {PLPpage};