// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Report writer command
Cypress.Commands.add('isVisible', (taskNumber, testName, domId, viewportWidth, device, arrayName) => {
  let result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Fail\n`;
  arrayName.push(result);
  cy.viewport(viewportWidth, 700);
  cy.get(`#${domId}`).should('be.visible').then(() => {
    arrayName.pop();
    result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Pass\n`;
    arrayName.push(result);
  });
});

Cypress.Commands.add('isNotVisible', (taskNumber, testName, domId, viewportWidth, device, arrayName) => {
  let result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Fail\n`;
  arrayName.push(result);
  cy.viewport(viewportWidth, 700);
  cy.get(`#${domId}`).should('not.be.visible').then(() => {
    arrayName.pop();
    result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Pass\n`;
    arrayName.push(result);
  });
});
