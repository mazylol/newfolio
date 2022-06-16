describe('Navigation', () => {
  it('should navigate to the skills page', () => {
    cy.visit('/');
    cy.get('a[href*="skills"]').click();
    cy.url().should('include', '/skills');
  });
  it('should navigate to the projects page', () => {
    cy.visit('/');
    cy.get('a[href*="projects"]').click();
    cy.url().should('include', '/projects');
  });
  it('should navigate to the about page', () => {
    cy.visit('/');
    cy.get('a[href*="about"]').click();
    cy.url().should('include', '/about');
  });
});

describe('Error handling', () => {
  it('should go to a 404 page', () => {
    cy.visit({
      url: '/fitnessgrampacertest',
      method: 'GET',
      failOnStatusCode: false
    });
    cy.url().should('include', '/fitnessgrampacertest');
    cy.get('h2').contains('This page could not be found.');
  });
});
