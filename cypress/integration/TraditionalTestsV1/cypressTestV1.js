const results = [];
const route = '/gridHackathonV1.html';

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

describe('Traditional V1 Test Task 2', () => {
  beforeEach(() => {
    cy.visit(route);
    cy.viewport(800, 600); // set viewport same as in modern approach to ensure necessary buttons are visible before applying filter
    cy.contains('a.open_filters', 'Filters').click();
    cy.get('#LABEL__containerc__104').click();
    cy.get('#filterBtn.btn_1').click();
  });

  after(() => {
    for (let i = 0; i < results.length; i++) {
      cy.readFile('Traditional-V1-TestResults.txt').then(data => {
        cy.writeFile('Traditional-V1-TestResults.txt', `${data}${results[i]}`);
      });
    }
  });

  it('checks correct number of products in filter results', () => {
    cy.filterResultsNumbers(2, 'filter results count', 'product_grid', 1200, 'laptop', results);
    cy.filterResultsNumbers(2, 'filter results count', 'product_grid', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.filterResultsNumbers(2, 'filter results count', 'product_grid', 500, 'mobile', results);
    };
  });

  // checks that the black shoes we expect are the ones visible after filter applied
  it('checks correct products appear in filter results', () => {
    cy.isVisible(2, 'filter results visibility', 'DIV__colcolmd__210', 1200, 'laptop', results);
    cy.isVisible(2, 'filter results visibility', 'DIV__colcolmd__235', 1200, 'laptop', results);
    cy.isVisible(2, 'filter results visibility', 'DIV__colcolmd__210', 768, 'tablet', results);
    cy.isVisible(2, 'filter results visibility', 'DIV__colcolmd__235', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(2, 'filter results visibility', 'DIV__colcolmd__210', 500, 'mobile', results);
      cy.isVisible(2, 'filter results visibility', 'DIV__colcolmd__235', 500, 'mobile', results);
    };
  });
});

describe('Traditional V1 Test Task 3', () => {
  beforeEach(() => {
    cy.visit(route);
    cy.contains('a', 'Appli Air x Night').click();
  });

  after(() => {
    for (let i = 0; i < results.length; i++) {
      cy.readFile('Traditional-V1-TestResults.txt').then(data => {
        cy.writeFile('Traditional-V1-TestResults.txt', `${data}${results[i]}`);
      });
    }
  });

  it('checks product name visibility and accuracy', () => {
    cy.isVisibleCheckAttr(3, 'product name visibility and accuracy', 'shoe_name', 1200, 'laptop', results, 'have.text', 'Appli Air x Night');
    cy.isVisibleCheckAttr(3, 'product name visibility and accuracy', 'shoe_name', 768, 'tablet', results, 'have.text', 'Appli Air x Night');
    if (Cypress.browser.name === 'chrome') {
      cy.isVisibleCheckAttr(3, 'product name visibility and accuracy', 'shoe_name', 500, 'mobile', results, 'have.text', 'Appli Air x Night');
    };
  });

  it('checks product image visibility', () => {
    cy.checkAttr(3, 'product image visibility', 'shoe_img', 1200, 'laptop', results, 'have.attr', 'style');
    cy.checkAttr(3, 'product image visibility', 'shoe_img', 768, 'table', results, 'have.attr', 'style');
    if (Cypress.browser.name === 'chrome') {
      cy.checkAttr(3, 'product image visibility', 'shoe_img', 500, 'mobile', results, 'have.attr', 'style');
    };
  });

  it('checks product rating visibility', () => {
    cy.isVisible(3, 'product rating visibility', 'SPAN__rating__76', 1200, 'laptop', results);
    cy.isVisible(3, 'product rating visibility', 'SPAN__rating__76', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(3, 'product rating visibility', 'SPAN__rating__76', 500, 'mobile', results);
    };
  });

  it('checks product sku visibility and accuracy', () => {
    cy.isVisibleCheckAttr(3, 'product sku visibility and accuracy', 'SMALL____84', 1200, 'laptop', results, 'have.text', 'SKU: MTKRY-001');
    cy.isVisibleCheckAttr(3, 'product sku visibility and accuracy', 'SMALL____84', 768, 'tablet', results, 'have.text', 'SKU: MTKRY-001');
    if (Cypress.browser.name === 'chrome') {
      cy.isVisibleCheckAttr(3, 'product sku visibility and accuracy', 'SMALL____84', 500, 'mobile', results, 'have.text', 'SKU: MTKRY-001');
    };
  });

  it('checks size selector visibility', () => {
    cy.isVisible(3, 'size selector visibility', 'DIV__row__88', 1200, 'laptop', results);
    cy.isVisible(3, 'size selector visibility', 'DIV__row__88', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(3, 'size selector visibility', 'DIV__row__88', 500, 'mobile', results);
    };
  });

  it('checks size selector default option accuracy', () => {
    cy.checkAttr(3, 'size selector default option accuracy', 'OPTION____94', 1200, 'laptop', results, 'have.text', 'Small (S)');
    cy.checkAttr(3, 'size selector default option accuracy', 'OPTION____94', 768, 'tablet', results, 'have.text', 'Small (S)');
    if (Cypress.browser.name === 'chrome') {
      cy.checkAttr(3, 'size selector default option accuracy', 'OPTION____94', 500, 'mobile', results, 'have.text', 'Small (S)');
    };
  });

  it('checks quantity selector visibility', () => {
    cy.isVisible(3, 'quantity selector visibility', 'DIV__row__98', 1200, 'laptop', results);
    cy.isVisible(3, 'quantity selector visibility', 'DIV__row__98', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(3, 'quantity selector visibility', 'DIV__row__98', 500, 'mobile', results);
    };
  });

  it('checks price visibility and accuracy', () => {
    cy.isVisibleCheckAttr(3, 'price visibility and accuracy', 'new_price', 1200, 'laptop', results, 'have.text', '$33.00');
    cy.isVisibleCheckAttr(3, 'price visibility and accuracy', 'new_price', 768, 'tablet', results, 'have.text', '$33.00');
    if (Cypress.browser.name === 'chrome') {
      cy.isVisibleCheckAttr(3, 'price visibility and accuracy', 'new_price', 500, 'mobile', results, 'have.text', '$33.00');
    };
  });

  it('checks old price visibility and accuracy', () => {
    cy.isVisibleCheckAttr(3, 'old price visibility and accuracy', 'old_price', 1200, 'laptop', results, 'have.text', '$48.00');
    cy.isVisibleCheckAttr(3, 'old price visibility and accuracy', 'old_price', 768, 'tablet', results, 'have.text', '$48.00');
    if (Cypress.browser.name === 'chrome') {
      cy.isVisibleCheckAttr(3, 'old price visibility and accuracy', 'old_price', 500, 'mobile', results, 'have.text', '$48.00');
    };
  });
  
  it('checks discount visibility', () => {
    cy.isVisible(3, 'discount visibility', 'discount', 1200, 'laptop', results);
    cy.isVisible(3, 'discount visibility', 'discount', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(3, 'discount visibility', 'discount', 500, 'mobile', results);
    };
  });

  it('checks add to cart button visibility', () => {
    cy.isVisible(3, 'add to cart button visibility', 'DIV__btnaddtoca__113', 1200, 'laptop', results);
    cy.isVisible(3, 'add to cart button visibility', 'DIV__btnaddtoca__113', 768, 'tablet', results);
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(3, 'add to cart button visibility', 'DIV__btnaddtoca__113', 500, 'mobile', results);
    };
  });
});