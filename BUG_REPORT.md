# Bug Report – SauceDemo

## Test Account

* **Username:** `problem_user`
* **Password:** `secret_sauce`

## Bug 1 – Product Images Are Mismatched

**Severity:** Medium

### Steps to Reproduce

1. Log in using `problem_user`.
2. Navigate to the Products page.
3. Observe the product images displayed for the available products.
4. Compare the images with their corresponding product names.

### Expected Behaviour

Each product should display its correct product image.

### Actual Behaviour

The product images do not match their corresponding product names. Multiple products display images belonging to different products.

---

## Bug 2 – Product Details Page Opens the Wrong Product

**Severity:** High

### Steps to Reproduce

1. Log in using `problem_user`.
2. Navigate to the Products page.
3. Click on **Sauce Labs Backpack**.
4. Observe the product details page.

### Expected Behaviour

The product details page should display information for **Sauce Labs Backpack**.

### Actual Behaviour

The product details page displays **Sauce Labs Fleece Jacket** instead of Sauce Labs Backpack.

---

## Bug 3 – Last Name Field Does Not Accept Input Correctly

**Severity:** High

### Steps to Reproduce

1. Log in using `problem_user`.
2. Add a product to the cart.
3. Navigate to the Cart page.
4. Click **Checkout**.
5. Enter `Dhananji` in the First Name field.
6. Enter `Chandrasiri` in the Last Name field.
7. Observe the input fields.
8. Click **Continue**.

### Expected Behaviour

The Last Name field should accept and retain the entered value `Chandrasiri`, and the user should be able to continue to the checkout overview.

### Actual Behaviour

The Last Name field does not retain the entered value correctly. The entered text affects the First Name field instead, and the Last Name field remains empty. Clicking Continue displays **"Last Name is required"**.

---

## Bug 4 – About Us Link Leads to a 404 Page

**Severity:** Medium

### Steps to Reproduce

1. Log in using `problem_user`.
2. Open the navigation menu.
3. Click **About Us**.
4. Observe the resulting page.

### Expected Behaviour

The About Us link should navigate to a valid About Us page.

### Actual Behaviour

The link navigates to a **404 Not Found** page.

---

## Bug 5 – Lazy List Repeats the Same Products Indefinitely

**Severity:** Medium

### Steps to Reproduce

1. Log in using `problem_user`.
2. Open the navigation menu.
3. Select **Dynamic Catalog**.
4. Select **Lazy List**.
5. Scroll down continuously.
6. Observe the products being loaded.

### Expected Behaviour

The list should display available products without continuously duplicating the same products. Once all available products have been displayed, the list should stop loading or indicate that there are no more products.

### Actual Behaviour

The same six products are repeatedly displayed as the user continues scrolling.

---

## Bug 6 – Sort Options Cannot Be Selected

**Severity:** Medium

### Steps to Reproduce

1. Log in using `problem_user`.
2. Navigate to the Products page.
3. Open the product sorting dropdown.
4. Try to select any available sorting option.

### Expected Behaviour

The user should be able to select a sorting option, and the products should be reordered according to the selected option.

### Actual Behaviour

The sorting dropdown opens and displays the available options, but the options cannot be selected and the product order does not change.

---

## Additional Observations

* The above issues were identified while exploring the application using the `problem_user` account.
* Other basic interactions such as adding and removing products from the cart were also checked during the exploration.
* The reported issues focus on incorrect product information, broken navigation, checkout input behaviour, and broken interactions.
