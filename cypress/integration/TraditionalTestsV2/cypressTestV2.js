const results = [];
const route = '/gridHackathonV2.html';

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

describe('Traditional V2 Test Task 2', () => {
  beforeEach(() => {
    cy.visit(route);
    cy.viewport(800, 600); // set viewport same as in modern approach to ensure necessary buttons are visible before applying filter
    cy.contains('a.open_filters', 'Filters').click();
    cy.get('#LABEL__containerc__104').click();
    cy.get('#filterBtn.btn_1').click();
  });

  after(() => {
    for (let i = 0; i < results.length; i++) {
      cy.readFile('Traditional-V2-TestResults.txt').then(data => {
        cy.writeFile('Traditional-V2-TestResults.txt', `${data}${results[i]}`);
      });
    }
  });

  // every command gets its own `it` to ensure every test runs even if another fails
  it('checks correct number of products in filter results 1200x700', () => {
    cy.filterResultsNumbers(2, 'filter results count', 'product_grid', 1200, 'laptop', results);
  });

  it('checks correct number of products in filter results 768x700', () => {
    cy.filterResultsNumbers(2, 'filter results count', 'product_grid', 768, 'tablet', results);
  });

  it('checks correct number of products in filter results 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.filterResultsNumbers(2, 'filter results count', 'product_grid', 500, 'mobile', results);
    };
  });

  // rest of these tests check that black shoes we expect are the ones visible after filter applied
  it('checks first of correct products appear in filter results 1200x700', () => {
    cy.isVisible(2, 'filter results visibility', 'DIV__colcolmd__211', 1200, 'laptop', results);
  });

  it('checks first of correct products appear in filter results 768x700', () => {
    cy.isVisible(2, 'filter results visibility', 'DIV__colcolmd__211', 768, 'tablet', results);
  });

  it('checks first of correct products appear in filter results 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(2, 'filter results visibility', 'DIV__colcolmd__211', 500, 'mobile', results);
    };
  });

  it('checks second of correct products appear in filter results 1200x700', () => {
    cy.isVisible(2, 'filter results visibility', 'DIV__colcolmd__236', 1200, 'laptop', results);
  });

  it('checks second of correct products appear in filter results 768x700', () => {
    cy.isVisible(2, 'filter results visibility', 'DIV__colcolmd__236', 768, 'tablet', results);
  });

  it('checks second of correct products appear in filter results 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(2, 'filter results visibility', 'DIV__colcolmd__236', 500, 'mobile', results);
    };
  });
});

describe('Traditional V2 Test Task 3', () => {
  beforeEach(() => {
    cy.visit(route);
    cy.contains('a', 'Appli Air x Night').click();
  });

  after(() => {
    for (let i = 0; i < results.length; i++) {
      cy.readFile('Traditional-V2-TestResults.txt').then(data => {
        cy.writeFile('Traditional-V2-TestResults.txt', `${data}${results[i]}`);
      });
    }
  });

  // every command gets its own `it` to ensure every test runs even if another fails
  it('checks product name visibility and accuracy 1200x700', () => {
    cy.isVisibleCheckAttr(3, 'product name visibility and accuracy', 'shoe_name', 1200, 'laptop', results, 'have.text', 'Appli Air x Night');
  });

  it('checks product name visibility and accuracy 768x700', () => {
    cy.isVisibleCheckAttr(3, 'product name visibility and accuracy', 'shoe_name', 768, 'tablet', results, 'have.text', 'Appli Air x Night');
  });

  it('checks product name visibility and accuracy 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isVisibleCheckAttr(3, 'product name visibility and accuracy', 'shoe_name', 500, 'mobile', results, 'have.text', 'Appli Air x Night');
    };
  });

  it('checks product image visibility 1200x700', () => {
    cy.checkAttr(3, 'product image visibility', 'shoe_img', 1200, 'laptop', results, 'have.attr', 'style');
  });

  it('checks product image visibility 768x700', () => {
    cy.checkAttr(3, 'product image visibility', 'shoe_img', 768, 'table', results, 'have.attr', 'style');
  });

  it('checks product image visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.checkAttr(3, 'product image visibility', 'shoe_img', 500, 'mobile', results, 'have.attr', 'style');
    };
  });

  it('checks product rating visibility 1200x700', () => {
    cy.isVisible(3, 'product rating visibility', 'SPAN__rating__76', 1200, 'laptop', results);
  });

  it('checks product rating visibility 768x700', () => {
    cy.isVisible(3, 'product rating visibility', 'SPAN__rating__76', 768, 'tablet', results);
  });

  it('checks product rating visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(3, 'product rating visibility', 'SPAN__rating__76', 500, 'mobile', results);
    };
  });

  it('checks product sku visibility and accuracy 1200x700', () => {
    cy.isVisibleCheckAttr(3, 'product sku visibility and accuracy', 'SMALL____84', 1200, 'laptop', results, 'have.text', 'SKU: MTKRY-001');
  });

  it('checks product sku visibility and accuracy 768x700', () => {
    cy.isVisibleCheckAttr(3, 'product sku visibility and accuracy', 'SMALL____84', 768, 'tablet', results, 'have.text', 'SKU: MTKRY-001');
  });

  it('checks product sku visibility and accuracy 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isVisibleCheckAttr(3, 'product sku visibility and accuracy', 'SMALL____84', 500, 'mobile', results, 'have.text', 'SKU: MTKRY-001');
    };
  });

  it('checks size selector visibility 1200x700', () => {
    cy.isVisible(3, 'size selector visibility', 'DIV__row__88', 1200, 'laptop', results);
  });

  it('checks size selector visibility 768x700', () => {
    cy.isVisible(3, 'size selector visibility', 'DIV__row__88', 768, 'tablet', results);
  });

  it('checks size selector visibility 500x700', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(3, 'size selector visibility', 'DIV__row__88', 500, 'mobile', results);
    };
  });

  it('checks size selector default option accuracy 1200x700', () => {
    cy.checkAttr(3, 'size selector default option accuracy', 'OPTION____94', 1200, 'laptop', results, 'have.text', 'Small (S)');
  });

  it('checks size selector default option accuracy 768x700', () => {
    cy.checkAttr(3, 'size selector default option accuracy', 'OPTION____94', 768, 'tablet', results, 'have.text', 'Small (S)');
  });

  it('checks size selector default option accuracy 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.checkAttr(3, 'size selector default option accuracy', 'OPTION____94', 500, 'mobile', results, 'have.text', 'Small (S)');
    };
  });

  it('checks quantity selector visibility 1200x700', () => {
    cy.isVisible(3, 'quantity selector visibility', 'DIV__row__98', 1200, 'laptop', results);
  });

  it('checks quantity selector visibility 768x700', () => {
    cy.isVisible(3, 'quantity selector visibility', 'DIV__row__98', 768, 'tablet', results);
  });

  it('checks quantity selector visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(3, 'quantity selector visibility', 'DIV__row__98', 500, 'mobile', results);
    };
  });

  it('checks price visibility and accuracy 1200x700', () => {
    cy.isVisibleCheckAttr(3, 'price visibility and accuracy', 'new_price', 1200, 'laptop', results, 'have.text', '$33.00');
  });

  it('checks price visibility and accuracy 768x700', () => {
    cy.isVisibleCheckAttr(3, 'price visibility and accuracy', 'new_price', 768, 'tablet', results, 'have.text', '$33.00');
  });

  it('checks price visibility and accuracy 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isVisibleCheckAttr(3, 'price visibility and accuracy', 'new_price', 500, 'mobile', results, 'have.text', '$33.00');
    };
  });

  it('checks old price visibility and accuracy 1200x700', () => {
    cy.isVisibleCheckAttr(3, 'old price visibility and accuracy', 'old_price', 1200, 'laptop', results, 'have.text', '$48.00');
  });

  it('checks old price visibility and accuracy 768x700', () => {
    cy.isVisibleCheckAttr(3, 'old price visibility and accuracy', 'old_price', 768, 'tablet', results, 'have.text', '$48.00');
  });

  it('checks old price visibility and accuracy 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isVisibleCheckAttr(3, 'old price visibility and accuracy', 'old_price', 500, 'mobile', results, 'have.text', '$48.00');
    };
  });

  it('checks discount visibility 1200x700', () => {
    cy.isVisible(3, 'discount visibility', 'discount', 1200, 'laptop', results);
  });

  it('checks discount visibility 768x700', () => {
    cy.isVisible(3, 'discount visibility', 'discount', 768, 'tablet', results);
  });

  it('checks discount visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(3, 'discount visibility', 'discount', 500, 'mobile', results);
    };
  });

  it('checks add to cart button visibility 1200x700', () => {
    cy.isVisible(3, 'add to cart button visibility', 'DIV__btnaddtoca__113', 1200, 'laptop', results);
  });
  
  it('checks add to cart button visibility 768x700', () => {
    cy.isVisible(3, 'add to cart button visibility', 'DIV__btnaddtoca__113', 768, 'tablet', results);
  });

  it('checks add to cart button visibility 500x700 (chrome only)', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.isVisible(3, 'add to cart button visibility', 'DIV__btnaddtoca__113', 500, 'mobile', results);
    };
  });
});