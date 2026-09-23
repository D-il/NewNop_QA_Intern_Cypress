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
│   ├── login.cy.js
│   └── purchase.cy.js
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
BUG_REPORT.md
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

### Sanity Test

* Verify that the SauceDemo login page loads successfully.

### Login Flow

The following scenarios have been automated:

* Successful login with valid credentials
* Login with invalid credentials
* Login with empty fields
* Successful logout

### E2E Purchase Flow

The following purchase flow has been automated:

* Login with valid credentials
* Add two products to the cart
* Verify the cart badge count
* Verify the correct products are in the cart
* Proceed to checkout
* Enter checkout information
* Verify the order summary
* Verify the item total
* Complete the order
* Verify the order confirmation message

### Bug Hunt

The application was explored using the `problem_user` account.

Six issues were documented in `BUG_REPORT.md`, covering:

* Mismatched product images
* Incorrect product details navigation
* Checkout Last Name input behaviour
* Broken About Us navigation
* Repeated products in the Lazy List
* Product sorting options that cannot be selected

## Assertions

The tests use specific assertions to verify expected application behaviour, including:

* Correct URL after successful login
* `Products` page title
* Expected error messages for invalid login attempts
* Return to the login page after logout
* Correct cart item count
* Correct product names in the cart and order summary
* Correct item total
* Successful order confirmation

## Bug Reports

Detailed findings from the `problem_user` bug hunt are documented in:

```text
BUG_REPORT.md
```

Each reported issue includes:

* Title
* Steps to reproduce
* Expected behaviour
* Actual behaviour
* Severity

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

## Test Approach

The automation focuses on:

* Positive and negative test scenarios
* Reusable test logic using the Page Object Pattern
* Separate test data using fixtures
* Specific assertions for expected behaviour
* End-to-end validation of a complete purchase flow
* Exploratory testing and clear, reproducible bug reporting


## Bonus – Option B: GitHub Actions CI Pipeline

I selected **Option B – CI Pipeline** for the bonus task.

I chose this option because GitHub Actions and CI automation were a new area for me, and I wanted to challenge myself by learning how automated test execution can be integrated into a CI workflow. Successfully setting up the pipeline and running the Cypress test suite through GitHub Actions gave me practical experience with CI automation.

The GitHub Actions workflow automatically runs the Cypress test suite when changes are pushed to the `main` branch or when a pull request is created for the `main` branch.

The workflow performs the following steps:

* Checks out the repository
* Sets up Node.js
* Installs project dependencies using `npm ci`
* Runs the Cypress test suite using `npx cypress run`

The workflow configuration is located at:

```text
.github/workflows/cypress.yml
```

The CI pipeline was successfully executed using GitHub Actions, and all **6 Cypress tests passed successfully**.
