/// <reference types="cypress" />

describe('HomeView Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the HomeView component', () => {
    cy.get('.home').should('exist');
  });

  it('should render the SearchCity component', () => {
    cy.get('.home').within(() => {
      cy.get('[data-cy="search-city"]').should('exist');
    });
  });

  it('should render the WeatherForecast component', () => {
    cy.get('.home').within(() => {
      cy.get('[data-cy="weather-forecast"]').should('exist');
    });
  });
});
