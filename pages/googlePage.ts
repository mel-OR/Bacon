class GooglePage {

public get searchInput() {
    return $('input[title="Search"]');
}

public get resultStats() {
    return $('#result-stats');
}

public get nutritionFactsDiv() {
    return $('//div[contains(text(), "Nutrition Facts")]');
}

public get baconFormatSelector() {
    return $('//div[contains(text(), "Nutrition Facts")]/../div/div/div/div/select');
}

public get caloriesValueLabel() {
    return $('//td/span[text()="Calories"]/following-sibling::span');
} 

public get getFirstSearchResultLink() {
    return $('//h2[contains(text(), "Web results")]/../div/div/a');
}

/*  Pass the same string Google provides for each option
*   Bacon, baked
*   Bacon, microwaved
*   Bacon, pan-fried
*   Bacon, raw
*   Canadian bacon, unheated
*/
public selectBaconOptionFromSelector(option: string) {
    this.baconFormatSelector.click();
    $('//option[contains(text(), "'+ option +'")]').click();
}

public getAllBaconOptionsWithCalories() {
    const optionsAndCaloriesMap = new Map();
    const allOptions = $$('//div[contains(text(), "Nutrition Facts")]/../div/div/div/div/select/option');
    allOptions.forEach( (option) => {
        const text  = option.getText();
        this.selectBaconOptionFromSelector(text);
        const calories = parseInt(this.caloriesValueLabel.getText());
        optionsAndCaloriesMap.set(text, calories);
    })
    return optionsAndCaloriesMap;
}

public searchResultsIsLoaded() {
    return this.resultStats.waitForExist({
      timeout: browser.config.waitforTimeout,
    });
}
}

export const googlePage = new GooglePage();