describe('SauceDemo Application', () => {

  it('should load the SauceDemo login page', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include', 'saucedemo.com')
  })

})