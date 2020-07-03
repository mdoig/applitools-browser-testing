const route = '/gridHackathonV1.html';

describe('Task 1', () => {
  beforeEach(() => {
    cy.visit(route);
  });

  it('checks nav visibility', () => {
    cy.viewport(1200, 700);
    cy.get('#NAV__colxlcollg__10').should('be.visible');
    cy.viewport(768, 700);
    cy.get('#NAV__colxlcollg__10').should('not.be.visible');
    if (Cypress.browser.name === 'chrome') {
      cy.viewport(500, 700);
      cy.get('#NAV__colxlcollg__10').should('not.be.visible');
    };
  });

  it('checks wishlist button visibility', () => {
    cy.viewport(1200, 700);
    cy.get('#LI____51').should('be.visible');
    cy.viewport(768, 700);
    cy.get('#LI____51').should('not.be.visible');
    if (Cypress.browser.name === 'chrome') {
      cy.viewport(500, 700);
      cy.get('#LI____51').should('not.be.visible');
    };
  });

  it('checks cart badge visibility', () => {
    cy.viewport(1200, 700);
    cy.get('#STRONG____50').should('be.visible');
    cy.viewport(768, 700);
    cy.get('#STRONG____50').should('be.visible');
    if (Cypress.browser.name === 'chrome') {
      cy.viewport(500, 700);
      cy.get('#STRONG____50').should('not.be.visible');
    };
  });

  it('checks search bar visibility', () => {
    cy.viewport(1200, 700);
    cy.get('#INPUTtext____42').should('be.visible');
    cy.viewport(768, 700);
    cy.get('#INPUTtext____42').should('be.visible');
    if (Cypress.browser.name === 'chrome') {
      cy.viewport(500, 700);
      cy.get('#INPUTtext____42').should('not.be.visible');
    };
  });

  it('checks filter options sidebar visibility', () => {
    cy.viewport(1200, 700);
    cy.get('#ASIDE__collg__67').should('be.visible');
    cy.viewport(768, 700);
    cy.get('#ASIDE__collg__67').should('not.be.visible');
    if (Cypress.browser.name === 'chrome') {
      cy.viewport(500, 700);
      cy.get('#ASIDE__collg__67').should('not.be.visible');
    };
  });

  it('checks grid view icons visibility', () => {
    cy.viewport(1200, 700);
    cy.get('#A____201').should('be.visible');
    cy.get('#A____203').should('be.visible');
    cy.viewport(768, 700);
    cy.get('#A____201').should('not.be.visible');
    cy.get('#A____203').should('not.be.visible');
    if (Cypress.browser.name === 'chrome') {
      cy.viewport(500, 700);
      cy.get('#A____201').should('not.be.visible');
      cy.get('#A____203').should('not.be.visible');
    };
  });

  it('checks filter text visibility', () => {
    cy.viewport(1200, 700);
    cy.get('#SPAN____208').should('not.be.visible');
    cy.viewport(768, 700);
    cy.get('#SPAN____208').should('be.visible');
    if (Cypress.browser.name === 'chrome') {
      cy.viewport(500, 700);
      cy.get('#SPAN____208').should('not.be.visible');
    };
  });

  it('checks filter icon visibility', () => {
    cy.viewport(1200, 700);
    cy.get('#ti-filter').should('not.be.visible');
    cy.viewport(768, 700);
    cy.get('#ti-filter').should('be.visible');
    if (Cypress.browser.name === 'chrome') {
      cy.viewport(500, 700);
      cy.get('#ti-filter').should('be.visible');
    };
  });

  it('checks item quick options visibility', () => {
    cy.viewport(1200, 700);
    cy.get('#product_grid').children().then((divs) => {
      for (let i = 0; i < divs.length; i++) {
        cy.get(divs[i]).within(() => {
          cy.get('ul').should('not.be.visible');
        });
      }
    });
    cy.viewport(768, 700);
    cy.get('#product_grid').children().then((divs) => {
      for (let i = 0; i < divs.length; i++) {
        cy.get(divs[i]).within(() => {
          cy.get('ul').should('be.visible');
        });
      }
    });
    if (Cypress.browser.name === 'chrome') {
      cy.viewport(500, 700);
      cy.get('#product_grid').children().then((divs) => {
        for (let i = 0; i < divs.length; i++) {
          cy.get(divs[i]).within(() => {
            cy.get('ul').should('be.visible');
          });
        }
      });
    };
  });
});