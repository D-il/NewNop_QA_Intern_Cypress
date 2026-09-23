import LoginPage from '../pages/LoginPage'

describe('SauceDemo E2E Purchase Flow', () => {

  const loginPage = new LoginPage()

  it('should complete a purchase successfully', () => {

    // Login
    loginPage.visit()
    loginPage.login('standard_user', 'secret_sauce')

    // Add two products to the cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    // Verify cart badge count
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '2')

    // Open the cart
    cy.get('.shopping_cart_link').click()

    // Verify the correct products are in the cart
    cy.get('.cart_item').should('have.length', 2)
    cy.get('.inventory_item_name')
      .eq(0)
      .should('have.text', 'Sauce Labs Backpack')
    cy.get('.inventory_item_name')
      .eq(1)
      .should('have.text', 'Sauce Labs Bike Light')

    // Proceed to checkout
    cy.get('[data-test="checkout"]').click()

    // Enter checkout information
    cy.get('[data-test="firstName"]').type('Dhananji')
    cy.get('[data-test="lastName"]').type('Chandrasiri')
    cy.get('[data-test="postalCode"]').type('70100')

    // Continue to order summary
    cy.get('[data-test="continue"]').click()

    // Verify order summary
    cy.get('.cart_item').should('have.length', 2)

    cy.get('.inventory_item_name')
      .eq(0)
      .should('have.text', 'Sauce Labs Backpack')

    cy.get('.inventory_item_name')
      .eq(1)
      .should('have.text', 'Sauce Labs Bike Light')

    // Verify item total
    cy.get('.summary_subtotal_label')
      .should('be.visible')
      .and('contain', 'Item total: $39.98')

    // Complete the order
    cy.get('[data-test="finish"]').click()

    // Verify order confirmation
    cy.get('.complete-header')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!')
  })

})