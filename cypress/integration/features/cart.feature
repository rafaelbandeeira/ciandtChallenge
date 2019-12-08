Feature: Shopping Cart

        As an unregistered customer, I want to be able to add a few shirts to the cart.

Background: 
    Given the customer is on the homepage

Scenario: The customer adds items on the cart
    And user clicks on the Add to cart buttom
    When they go to the cart
    Then the products should be displayed


   