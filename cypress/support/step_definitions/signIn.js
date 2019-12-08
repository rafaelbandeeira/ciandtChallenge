import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { num_6 } from './functions/globalFunctions'


Given ('the user opens the login page', () => {
    cy.get('.login')
      .click()
})

When ('they input the wrong username', () => {
    cy.get('#login_form')
      .find('#email')
      .type('not_registered@gmail.com')
    
    cy.get('#login_form')  
      .find('#passwd')
      .type(num_6)
})

Then ('an error is displayed', () => {
    cy.get('#SubmitLogin')
      .click()
    cy.contains('Authentication failed')
})

When ('they input their credentials', () => {
    cy.get('#login_form')
      .find('#email')
      .type('bruce@waynecorp.com')

    cy.get('#login_form')  
      .find('#passwd')
      .type('123456')
    cy.get('#SubmitLogin')
      .click()
})

Then ('My Account screen should be displayed', () => {
  cy.url()
    .should('include', 'controller=my-account')
  cy.contains('Sign out')
    .should('be.visible')
  cy.get('#my-account')
    .should('be.visible')
  cy.contains('Bruce Wayne')
})