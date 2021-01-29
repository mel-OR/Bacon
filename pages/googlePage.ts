class GooglePage {

public get searchInput() {
    return $('input[title="Search"]');
}

public get resultStats() {
    return $('#result-stats');
}

public searchResultsIsLoaded() {
    return this.resultStats.waitForExist({
      timeout: browser.config.waitforTimeout,
    });
}
}

export const googlePage = new GooglePage();