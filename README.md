# Applitools Browser Testing Hackathon
**By Marshall Doig**

This project contains automated tests for both traditional and modern approaches for visual application testing. The tests run against two versions of the AppliFashion app, the bug-free V1 version and the newer, buggy V2 version.

## Getting started

Ensure the following are installed:

* [Applitools](https://applitools.com/tutorials/cypress.html) (look under "Prerequesites" at the link)
* [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html)
* [Google Chrome](https://www.google.com/chrome/index.html)
* [Firefox](https://www.mozilla.org/en-US/firefox/new/)
* [Microsoft Edge](https://www.microsoft.com/en-us/edge)

If unable to set the Applitools API key as an environment variable in the command line, add it in place of `'YOUR_API_KEY'` in the `applitools.config.js` file. (If able to set the key in the command line, note out the `apiKey` line in the config file.)

If you wish to start with a blank file for results reporting, delete the content in `Traditional-V1-TestResults.txt`, `Traditional-V2-TestResults.txt`, or both. If you decide to leave the current results in the file, any newer results will be appended after any execution of the traditional specs.

## Running the tests

To open the [Cypress test runner](https://docs.cypress.io/guides/core-concepts/test-runner.html), use the `npx cypress open` command. Once the test runner is open, [select the desired browser](https://docs.cypress.io/guides/guides/cross-browser-testing.html) and then select the test spec you want to run.

If you choose to [run the tests headlessly](https://docs.cypress.io/guides/guides/command-line.html), remember to specify the browser [using the proper flag](https://docs.cypress.io/guides/guides/cross-browser-testing.html).

## Checking results
Results of the Applitools test can be viewed on the [Applitools Test Manager](https://eyes.applitools.com/). Results of the traditional tests can be viewed in the Cypress test runner or in the `Traditional-V1-TestResults.txt` or `Traditional-V2-TestResults.txt` files.

## Further resources

* [Applitools documentation](https://applitools.com/docs/)
* [Cypress documentation](https://docs.cypress.io/)