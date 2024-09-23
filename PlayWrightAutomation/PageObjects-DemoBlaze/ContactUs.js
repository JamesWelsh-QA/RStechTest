class ContactUs {

    constructor (page)
    {
        this.page = page;

        this.emailField = page.locator("#recipient-email");
        this.nameField = page.locator("#recipient-name");
        this.messageField = page.locator("#message-text");
        this.sendMessage = page.locator("xpath=//*[@id='exampleModal']/div/div/div[3]/button[2]");

    }

    async enterEmail(email)
    {
        await this.page.waitForLoadState('networkidle');
        await this.emailField.fill(email);

    }

    async enterName(name)
    {
        await this.page.waitForLoadState('networkidle');
        await this.nameField.fill(name);

    }

    async enterMessage(message)
    {
        await this.page.waitForLoadState('networkidle');
        await this.messageField.fill(message);

    }

    async sendForm()
    {
        await this.page.waitForLoadState('networkidle');
        await this.sendMessage.click();

    }

    async acceptAlert()
    {
        await this.page.waitForLoadState('networkidle');
        this.page.on('dialog', dialog => dialog.Accept());

    }
    
}

module.exports = {ContactUs};