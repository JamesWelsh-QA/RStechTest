class SearchBar {

    constructor (page)
    {
        this.page = page;

        this.searchBox = page.locator('#search-input');
        this.searchButton = page.locator('#search-button');

    }

async enterToSearchBox(searchTerm)
    {
        await this.searchBox.fill(searchTerm);
    }

async clickSearch()
    {
        await this.searchButton.click();
    }

}

module.exports = {SearchBar};