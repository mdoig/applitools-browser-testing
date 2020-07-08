// ***********************************************
// 
// All seven custom commands accept these parameters:
// @param taskNumber -- the number of the hackathon task
// @param testName -- name of the test
// @param domId -- id of the element being tested
// @param viewportWidth -- sets the viewport width for the correct type of test
// @param device -- laptop, tablet, or mobile; choose depending on viewportWidth (laptop is 1200, tablet is 768, mobile is 500)
// @param arrayName -- name of the array to which every result is pushed 
// 
// Two custom commands, `checkAttr` and `isVisibleCheckAttr`, accept these additional parameters:
// @param chainer -- any valid chainer that Cypress accepts
// @param value -- value to assert against chainer
//
// ***********************************************

Cypress.Commands.add('checkAttr', (taskNumber, testName, domId, viewportWidth, device, arrayName, chainer, value) => {
  let result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Fail\n`;
  arrayName.push(result); // initially push 'fail' result to array that will hold all results
  cy.viewport(viewportWidth, 700);
  cy.get(`#${domId}`).should(chainer, value).then(() => {
    // if assertion passes, then 'fail' result is popped from array and replaced with a 'pass' result
    arrayName.pop();
    result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Pass\n`;
    arrayName.push(result);
  });
});

Cypress.Commands.add('filterResultsNumbers', (taskNumber, testName, domId, viewportWidth, device, arrayName) => {
  let result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Fail\n`;
  arrayName.push(result);
  cy.viewport(viewportWidth, 700);
  cy.get(`#${domId}`).children().should('have.length', 2).then(() => {
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

Cypress.Commands.add('isVisibleCheckAttr', (taskNumber, testName, domId, viewportWidth, device, arrayName, chainer, value) => {
  let result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Fail\n`;
  arrayName.push(result);
  cy.viewport(viewportWidth, 700);
  cy.get(`#${domId}`).should('be.visible').should(chainer, value).then(() => {
    arrayName.pop();
    result = `Task: ${taskNumber}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${Cypress.browser.name}, Viewport: ${viewportWidth} x 700, Device: ${device}, Status: Pass\n`;
    arrayName.push(result);
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
