# Bacon
Regression tests for Bacon. This will check different parts of the search results on google.
* Used WebdriverIO with Jasmine to run the browser UI tests, using the page object pattern. This framework can be extended to run on mobile later if needed, by using the Appium driver rather than the Selenium driver.
* The full list of libraries used can be seen in the package.json file under the "dependencies" section. 


## Prerequisites and Installing
* **This project is only supported for macOS!**
* Terminal program of your choice that supports bash/zsh. Built-in macOS Terminal should do.
* Download Node 14.15.4 and install it: https://nodejs.org/en/download/
* Install Yarn by running this command in your Terminal: `npm install -g yarn`
* One package has a dependency on XCode tools. If you do not have XCode installed, run this command in Terminal to download the XCode subset that is needed for the dependent package: `xcode-select --install` (this may take a little time)
* Also install this dependent package by running this command in Terminal: `yarn add -g node-gyp`
* In your command line, change your directory to /Bacon if you are not already there: `cd <your path to Bacon>`
* Install the project: `yarn install`

## Running the tests
* From the main project folder "Bacon" run `yarn test:ui` to run the entire UI test suite
* From the main project folder "Bacon" run `yarn test:api` to run the API tests

## Troubleshooting
* You may need to install node-gyp under your root access. You'll see a Permission denied error if so. Run `sudo yarn add -g node-gyp` instead and enter your user's machine account password when prompted.
* The dependent packages needed for the UI test should give an error during the `yarn install` step if you didn't get them in place in the right order. The messages have the command needed to get those in place. 
* Make sure you have a recent version of Chrome installed. Though the chromerdriver that is pulled for the project is currently up to date, your browser must also be compatible with that. If the test output shows the browser session was closed without running steps, then go to Chrome and make sure you are up to date and try running the test again.
* If there are other problems, [raise an issue in github](https://github.com/mel-OR/Bacon/issues) for this project.

