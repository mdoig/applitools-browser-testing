const route = '/gridHackathonV2.html';
const results = [];

describe('Traditional V2 Test Task 1', () => {
  beforeEach(() => {
    cy.visit(route);
  });

  after(() => {
    for (let i = 0; i < results.length; i++) {
      cy.readFile('Traditional-V2-TestResults.txt').then(data => {
        cy.writeFile('Traditional-V2-TestResults.txt', `${data}${results[i]}`);
      });
    }
  });

  // every command gets its own `it` to ensure every test runs even if another fails
  it('checks nav visibility 1200x700', () => {
    cy.isVisible(1, 'nav visibility', 'NAV__colxlcollg__10', 1200, 'laptop', results);
  });

  it('checks nav visibility 768x700', () => {
    cy.isNotVisible(1, 'nav visibility', 'NAV__colxlcollg__10', 768, 'tablet', results);
  });

  it('checks nav visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'nav visibility', 'NAV__colxlcollg__10', 500, 'mobile', results);
    };
  });

  it('checks wishlist button visibility 1200x700', () => {
    cy.isVisible(1, 'wishlist button visibility', 'LI____51', 1200, 'laptop', results);
  });

  it('checks wishlist button visibility 768x700', () => {
    cy.isNotVisible(1, 'wishlist button visibility', 'LI____51', 768, 'tablet', results);
  });

  it('checks wishlist button visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'wishlist button visibility', 'LI____51', 500, 'mobile', results);
    };
  });

  it('checks cart badge visibility 1200x700', () => {
    cy.isVisible(1, 'cart badge visibility', 'STRONG____50', 1200, 'laptop', results);
  });

  it('checks cart badge visibility 768x700', () => {
    cy.isVisible(1, 'cart badge visibility', 'STRONG____50', 768, 'tablet', results);
  });

  it('checks cart badge visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'cart badge visibility', 'STRONG____50', 500, 'mobile', results);
    };
  });

  it('checks search bar visibility 1200x700', () => {
    cy.isVisible(1, 'search bar visibility', 'INPUTtext____42', 1200, 'laptop', results);
  });

  it('checks search bar visibility 768x700', () => {
    cy.isVisible(1, 'search bar visibility', 'INPUTtext____42', 768, 'tablet', results);
  });

  it('checks search bar visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'search bar visibility', 'INPUTtext____42', 500, 'mobile', results);
    };
  });

  it('checks filter options sidebar visibility 1200x700', () => {
    cy.isVisible(1, 'filter options sidebar visibility', 'ASIDE__collg__67', 1200, 'laptop', results);
  });

  it('checks filter options sidebar visibility 768x700', () => {
    cy.isNotVisible(1, 'filter options sidebar visibility', 'ASIDE__collg__67', 768, 'tablet', results);
  });

  it('checks filter options sidebar visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'filter options sidebar visibility', 'ASIDE__collg__67', 500, 'mobile', results);
    };
  });

  it('checks first grid view icon visibility 1200x700', () => {
    cy.isVisible(1, 'first grid view icon visibility', 'A____202', 1200, 'laptop', results);
  });

  it('checks second grid view icon visibility 1200x700', () => {
    cy.isVisible(1, 'second grid view icon visibility', 'A____204', 1200, 'laptop', results);
  });

  it('checks first grid view icon visibility 768x700', () => {
    cy.isNotVisible(1, 'first grid view icon visibility', 'A____202', 768, 'tablet', results);
  });

  it('checks second grid view icon visibility 768x700', () => {
    cy.isNotVisible(1, 'second grid view icon visibility', 'A____204', 768, 'tablet', results);
  });

  it('checks first grid view icon visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'first grid view icon visibility', 'A____202', 500, 'mobile', results);
    };
  });

  it('checks second grid view icon visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'second grid view icon visibility', 'A____204', 500, 'mobile', results);
    };
  });

  it('checks filter text visibility 1200x700', () => {
    cy.isNotVisible(1, 'filter text visibility', 'SPAN____209', 1200, 'laptop', results);
  });

  it('checks filter text visibility 768x700', () => {
    cy.isVisible(1, 'filter text visibility', 'SPAN____209', 768, 'tablet', results);
  });

  it('checks filter text visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isNotVisible(1, 'filter text visibility', 'SPAN____209', 500, 'mobile', results);
    };
  });

  it('checks filter icon visibility 1200x700', () => {
    cy.isNotVisible(1, 'filter icon visibility', 'ti-filter', 1200, 'laptop', results);
  });

  it('checks filter icon visibility 768x700', () => {
    cy.isVisible(1, 'filter icon visibility', 'ti-filter', 768, 'tablet', results);
  });

  it('checks filter icon visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(1, 'filter icon visibility', 'ti-filter', 500, 'mobile', results);
    };
  });

  it('checks item quick options visibility 1200x700', () => {
    cy.productGridNotVisible(1, 'item quick options visibility', 'product_grid', 1200, 'laptop', results);
  });

  it('checks item quick options visibility 768x700', () => {
    cy.productGridVisible(1, 'item quick options visibility', 'product_grid', 768, 'tablet', results);
  });

  it('checks item quick options visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.productGridVisible(1, 'item quick options visibility', 'product_grid', 500, 'mobile', results);
    };
  });
});