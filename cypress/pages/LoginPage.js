class LoginPage {

  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  enterUsername(username) {
    cy.get('#user-name').type(username)
  }

  enterPassword(password) {
    cy.get('#password').type(password)
  }

  clickLogin() {
    cy.get('#login-button').click()
  }

  login(username, password) {
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]')
  }

  openMenu() {
    cy.get('#react-burger-menu-btn').click()
  }

  clickLogout() {
    cy.get('#logout_sidebar_link')
      .should('be.visible')
      .click()
  }
}

export default LoginPage