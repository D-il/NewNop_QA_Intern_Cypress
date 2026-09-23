import LoginPage from '../pages/LoginPage'

describe('SauceDemo Login Flow', () => {

  const loginPage = new LoginPage()

  beforeEach(() => {
    cy.fixture('users').as('users')
  })

  it('should login successfully with valid credentials', function () {

    loginPage.visit()
    loginPage.login(
      this.users.validUser.username,
      this.users.validUser.password
    )

    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')

  })

  it('should show an error for invalid credentials', function () {

    loginPage.visit()
    loginPage.login(
      this.users.invalidUser.username,
      this.users.invalidUser.password
    )

    loginPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'Username and password do not match')

  })

  it('should show an error when login fields are empty', () => {

    loginPage.visit()
    loginPage.clickLogin()

    loginPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'Username is required')

  })

  it('should logout successfully and return to login page', function () {

    loginPage.visit()
    loginPage.login(
      this.users.validUser.username,
      this.users.validUser.password
    )

    loginPage.openMenu()
    loginPage.clickLogout()

    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('#login-button').should('be.visible')

  })

})