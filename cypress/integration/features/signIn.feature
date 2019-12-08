Feature: Sign in

   As a user, I want to be able to log into
   the website

Background:
    Given the customer is on the homepage

Scenario: Wrong username
    Given the user opens the login page
    When they input the wrong username
    Then an error is displayed

Scenario: Correct credentials
    Given the user opens the login page
    When they input their credentials
    Then My Account screen should be displayed