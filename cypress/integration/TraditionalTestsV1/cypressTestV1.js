const route = '/gridHackathonV2.html';
const results = [];

describe('Traditional V1 Test Task 1', () => {
  beforeEach(() => {
    cy.visit(route);
  });

  after(() => {
    for (let i = 0; i < results.length; i++) {
      cy.readFile('Traditional-V1-TestResults.txt').then(data => {
        cy.writeFile('Traditional-V1-TestResults.txt', `${data}${results[i]}`);
      });
    }
  });

  it('checks nav visibility', () => {
    cy.isVisible(1, 'nav visibility', 'NAV__colxlcollg__10', 1200, 'laptop', results);
    cy.isNotVisible(1, 'nav visibility', 'NAV__colxlcollg__10', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'nav visibility', 'NAV__colxlcollg__10', 500, 'mobile', results);
    };
  });

  it('checks wishlist button visibility', () => {
    cy.isVisible(1, 'wishlist button visibility', 'LI____51', 1200, 'laptop', results);
    cy.isNotVisible(1, 'wishlist button visibility', 'LI____51', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'wishlist button visibility', 'LI____51', 500, 'mobile', results);
    };
  });

  it('checks cart badge visibility', () => {
    cy.isVisible(1, 'cart badge visibility', 'STRONG____50', 1200, 'laptop', results);
    cy.isVisible(1, 'cart badge visibility', 'STRONG____50', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'cart badge visibility', 'STRONG____50', 500, 'mobile', results);
    };
  });

  it('checks search bar visibility', () => {
    cy.isVisible(1, 'search bar visibility', 'INPUTtext____42', 1200, 'laptop', results);
    if (Cypress.browser.name === 'firefox') { // handles bug in Firefox for Cypress that causes element not to be visible at width of 768
      cy.isNotVisible(1, 'search bar visibility', 'INPUTtext____42', 768, 'tablet', results);
    } else {
      cy.isVisible(1, 'search bar visibility', 'INPUTtext____42', 768, 'tablet', results);
    }
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'search bar visibility', 'INPUTtext____42', 500, 'mobile', results);
    };
  });

  it('checks filter options sidebar visibility', () => {
    cy.isVisible(1, 'filter options sidebar visibility', 'ASIDE__collg__67', 1200, 'laptop', results);
    cy.isNotVisible(1, 'filter options sidebar visibility', 'ASIDE__collg__67', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'filter options sidebar visibility', 'ASIDE__collg__67', 500, 'mobile', results);
    };
  });

  it('checks grid view icons visibility', () => {
    cy.isVisible(1, 'first grid view icon visibility', 'A____201', 1200, 'laptop', results);
    cy.isVisible(1, 'second grid view icon visibility', 'A____203', 1200, 'laptop', results);
    cy.isNotVisible(1, 'first grid view icon visibility', 'A____201', 768, 'tablet', results);
    cy.isNotVisible(1, 'second grid view icon visibility', 'A____203', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'first grid view icon visibility', 'A____201', 500, 'mobile', results);
      cy.isNotVisible(1, 'second grid view icon visibility', 'A____203', 500, 'mobile', results);
    };
  });

  it('checks filter text visibility', () => {
    cy.isNotVisible(1, 'filter text visibility', 'SPAN____208', 1200, 'laptop', results);
    cy.isVisible(1, 'filter text visibility', 'SPAN____208', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'filter text visibility', 'SPAN____208', 500, 'mobile', results);
    };
  });

  it('checks filter icon visibility', () => {
    cy.isNotVisible(1, 'filter icon visibility', 'ti-filter', 1200, 'laptop', results);
    cy.isVisible(1, 'filter icon visibility', 'ti-filter', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(1, 'filter icon visibility', 'ti-filter', 500, 'mobile', results);
    };
  });

  it('checks item quick options visibility', () => {
    cy.productGridNotVisible(1, 'item quick options visibility', 'product_grid', 1200, 'laptop', results);
    cy.productGridVisible(1, 'item quick options visibility', 'product_grid', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.productGridVisible(1, 'item quick options visibility', 'product_grid', 500, 'mobile', results);
    };
  });
});