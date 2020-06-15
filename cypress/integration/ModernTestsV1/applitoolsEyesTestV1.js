import { browserCombo } from '../../support/index.js';

const route = '/gridHackathonV1.html';

describe('Applitools Eyes Modern Test', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'AppliFashion',
      batchName: 'UFG Hackathon',
      browser: browserCombo,
      concurrency: 10
    });
    cy.viewport(800, 600);
    cy.visit(route);
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('Task 1', () => {
    cy.eyesCheckWindow('Cross-Device Elements Test');
  });

  it('Task 2', () => {
    cy.get('#LABEL__containerc__104').click();
    cy.get('#filterBtn.btn_1').click();
    cy.eyesCheckWindow({
      tag: 'Filter Results',
      target: 'region',
      selector: '#product_grid'
    });
  });

  it('Task 3', () => {
    cy.contains('a', 'Appli Air x Night').click();
    cy.eyesCheckWindow('Product Details test');
  });
});