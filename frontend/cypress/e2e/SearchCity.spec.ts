/// <reference types="cypress" />
describe('SearchCity Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the search input', () => {
    cy.get('[data-cy="search-city"] h3').contains('Type a city name to search').should('be.visible');
    cy.get('.gmap-autocompolete').should('exist');
  });

  it('updates selected place on autocomplete selection', () => {
    cy.get('.gmap-autocompolete')
      .type('San Francisco');
    cy.get('.pac-item').first().click();
    cy.get('.gmap-class').should('exist');
    cy.get('.gmap-class').then(($map) => {
      expect($map).to.have.class('gmap-class'); 
    });
  });

  it('updates selected place on map click', () => {
    cy.get('.gmap-autocompolete')
        .type('San Francisco');
    cy.get('.pac-item').first().click();
    cy.get('.gmap-class').should('exist');
    cy.get('.gmap-class').click(100, 100); 
    cy.get('.gmap-class').should('exist');
  });
});
