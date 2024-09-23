class BrowserSetup {

    constructor (page)
    {
        this.page = page;
    
    }

 async invokeBrowser(url) 
    {
        await this.page.goto(url);
        await this.page.setViewportSize({ width: 1500, height: 900 });
    }
    
    }
       
module.exports = {BrowserSetup};