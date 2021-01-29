import {googlePage} from '../pages/googlePage'

describe('Bacon search on google', () =>{
    it('searches for bacon', () => {
        browser.url('');
        googlePage.searchInput.waitForExist();
        googlePage.searchInput.setValue('bacon');
        googlePage.searchInput.keys('\uE006');
        //googlePage.searchResultsIsLoaded();

        expect(googlePage.searchResultsIsLoaded()).toBe(true);
    })
})