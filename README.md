# QA Automation Intern Assignment

Automated testing project for the SauceDemo web application using Cypress.

## Application Under Test

**SauceDemo**
https://www.saucedemo.com/

## Framework Choice

I chose **Cypress** for this assignment because it provides a simple and developer-friendly approach to end-to-end web application testing. It provides built-in assertions, browser execution, debugging, and clear test failure information.

## Project Structure

```text
cypress/
├── e2e/
│   ├── sanity.cy.js
│   └── login.cy.js
│
├── fixtures/
│   ├── example.json
│   └── users.json
│
├── pages/
│   └── LoginPage.js
│
└── support/
    ├── commands.js
    └── e2e.js

cypress.config.js
package.json
package-lock.json
README.md
```

## Test Data

Test data is kept separate from the test logic using Cypress fixtures.

The login credentials are stored in:

```text
cypress/fixtures/users.json
```

This makes the test data easier to maintain and update without changing the test implementation.

## Page Object Pattern

The **Page Object Pattern** is used for the login functionality.

The `LoginPage.js` page object contains reusable actions for:

* Visiting the login page
* Entering username and password
* Clicking the login button
* Accessing login error messages
* Opening the navigation menu
* Logging out

This reduces duplicated selectors and keeps the test cases focused on the behaviour being tested.

## Current Test Coverage

### Login Flow

The following scenarios have been automated:

* Successful login with valid credentials
* Login with invalid credentials
* Login with empty fields
* Successful logout

## Assertions

The tests use specific assertions to verify expected application behaviour, including:

* Correct URL after successful login
* `Products` page title
* Expected error message for invalid credentials
* Expected error message when username is empty
* Return to the login page after logout

## Test Evidence

Relevant test results were verified through Cypress, and screenshots were captured for passing test scenarios during development.

## Prerequisites

* Node.js
* npm

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/D-il/NewNop_QA_Intern_Cypress.git
cd NewNop_QA_Intern_Cypress
npm install
```

## Running Tests

Open the Cypress Test Runner:

```bash
npx cypress open
```

Run all tests in headless mode:

```bash
npx cypress run
```

## Planned Coverage

The project will be extended with:

* End-to-end purchase flow
* Bug investigation using `problem_user`
* Detailed bug reports
* Optional API testing
* Optional GitHub Actions CI
