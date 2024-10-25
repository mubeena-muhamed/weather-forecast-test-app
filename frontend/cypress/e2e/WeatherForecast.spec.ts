/// <reference types="cypress" />

describe('WeatherForecast Component', () => {
    const mockWeatherData = {
    latitude: 10.470995806919369,
    longitude: 77.29767149661046,
    elevation: 100,
    current_weather: {
      temperature: 25,
      windspeed: 10,
      winddirection: 180,
      weathercode: 1,
      time: new Date().toISOString(),
    },
  };
  beforeEach(() => {
    cy.visit('/');
  });

  it('fetches and displays weather data when a location is selected', () => {
    cy.intercept('GET', '/weather/forecast*', {
      statusCode: 200,
      body: mockWeatherData,
    }).as('getWeatherForecast');
      
    cy.get('.gmap-autocompolete')
        .type('San Francisco');
    cy.get('.pac-item').first().click();
    cy.wait('@getWeatherForecast').then((interception) => {
      expect(interception.response).to.not.be.undefined;
      expect(interception.response?.statusCode).to.equal(200);
      expect(interception.response?.body).to.deep.equal(mockWeatherData);
    });
    cy.get('.gmap-class').should('exist');
    cy.get('.gmap-class').click(100, 100); 
    cy.get('.gmap-class').should('exist');
    cy.get('[data-cy="weather-forecast"]')
      .should('contain', 'Temperature: ')
      .should('contain', 'Conditions: ') 
      .should('contain', 'Wind Speed: ')
      .should('contain', 'Wind Direction: ');
  });

  it('displays a message when no location is selected', () => {
    cy.get('[data-cy="weather-forecast"]')
      .should('contain', 'Please select a location first.');
  });
});
