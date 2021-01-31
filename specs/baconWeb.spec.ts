import {googlePage} from '../pages/googlePage'

describe('Bacon search on google', () =>{
    it('searches for bacon', () => {
        browser.url('');
        googlePage.searchInput.waitForExist();
        googlePage.searchInput.setValue('bacon');
        googlePage.searchInput.keys('\uE006');
        googlePage.searchResultsIsLoaded();
        expect(googlePage.getFirstSearchResultLink.getAttribute('href')).toBe('https://en.wikipedia.org/wiki/Bacon');
        expect(googlePage.nutritionFactsDiv.isExisting());
        googlePage.nutritionFactsDiv.click();
        expect(googlePage.baconFormatSelector.isExisting());
        expect(googlePage.caloriesValueLabel.getText()).toBe('43');
        googlePage.selectBaconOptionFromSelector('Bacon, baked');
        expect(googlePage.caloriesValueLabel.getText()).toBe('44');

    })
})