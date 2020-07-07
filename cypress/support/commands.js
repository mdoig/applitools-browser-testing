// ***********************************************
// 
// All four custom commands accept the same parameters.
// @param taskNumber -- the number of the hackathon task
// @param testName -- name of the test
// @param domId -- id of the element being tested
// @param viewportWidth -- sets the viewport width for the correct type of test
// @param device -- laptop, tablet, or mobile; choose depending on viewportWidth (laptop is 1200, tablet is 768, mobile is 500)
// @param arrayName -- name of the array to which every result is pushed 
// 
// ***********************************************

Cypress.Commands.add('isVisible', (taskNumber, testName, domId, viewportWidth, device, arrayName) => {
  let result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Fail\n`;
  arrayName.push(result); // initially push 'fail' result to array that will hold all results
  cy.viewport(viewportWidth, 700);
  cy.get(`#${domId}`).should('be.visible').then(() => {
    // if assertion passes, then 'fail' result is popped from array and replaced with a 'pass' result
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

Cypress.Commands.add('productGridVisible', (taskNumber, testName, domId, viewportWidth, device, arrayName) => {
  let result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Fail\n`;
  arrayName.push(result);
  cy.viewport(viewportWidth, 700);
  cy.get(`#${domId}`).children().then((divs) => {
    for (let i = 0; i < divs.length; i++) {
      cy.get(divs[i]).within(() => {
        cy.get('ul').should('be.visible').then(() => {
          arrayName.pop();
          result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Pass\n`;
          arrayName.push(result);
        });
      });
    }
  });
});

Cypress.Commands.add('productGridNotVisible', (taskNumber, testName, domId, viewportWidth, device, arrayName) => {
  let result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Fail\n`;
  arrayName.push(result);
  cy.viewport(viewportWidth, 700);
  cy.get(`#${domId}`).children().then((divs) => {
    for (let i = 0; i < divs.length; i++) {
      cy.get(divs[i]).within(() => {
        cy.get('ul').should('not.be.visible').then(() => {
          arrayName.pop();
          result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Pass\n`;
          arrayName.push(result);
        });
      });
    }
  });
});
