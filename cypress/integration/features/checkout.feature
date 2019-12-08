Feature: Purchases

    As a registered user, I should be able to purchase products.

Background:
    Given the customer is on the homepage

Scenario: Checking out a product
    Given user clicks on the Add to cart buttom
    When they go to the cart
    And proceeds to checkout
    Then an order should be placed