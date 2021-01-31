import {googlePage} from '../pages/googlePage'

describe('Search for bacon on google', () =>{
    it('checks that the bacon wikipedia article is first result', () => {
        browser.url('');
        googlePage.searchInput.waitForExist();
        googlePage.searchInput.setValue('bacon');
        googlePage.searchInput.keys('\uE006');
        googlePage.searchResultsIsLoaded();
        expect(googlePage.getFirstSearchResultLink.getAttribute('href')).toBe('https://en.wikipedia.org/wiki/Bacon');
    })
    it('checks nutrition facts', () => {
        expect(googlePage.nutritionFactsDiv.isExisting());
        googlePage.nutritionFactsDiv.click();
        expect(googlePage.baconFormatSelector.isExisting());
        expect(googlePage.caloriesValueLabel.getText()).toBe('43');
        googlePage.selectBaconOptionFromSelector('Bacon, baked');
        expect(googlePage.caloriesValueLabel.getText()).toBe('44');
    })
    it('reloads the page and checks the bacon wikipedia is the first result', () => {
        browser.refresh();
        googlePage.searchResultsIsLoaded();
        expect(googlePage.getFirstSearchResultLink.getAttribute('href')).toBe('https://en.wikipedia.org/wiki/Bacon');
    })
    it('checks Bacon, raw has the most calories', () => {
        const baconMap = googlePage.getAllBaconOptionsWithCalories();
        const maxValue  = [...baconMap.entries()].reduce((current, next) => next[1] > current[1] ? next : current);
        expect(maxValue[0]).toBe('Bacon, raw');
        })

    })