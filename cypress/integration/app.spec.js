describe('Navigation', () => {
  it('should navigate to the skills page', () => {
    cy.visit('/')
    cy.get('a[href*="skills"]').click()
    cy.url().should('include', '/skills')
  })
})
