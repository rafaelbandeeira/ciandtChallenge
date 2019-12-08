import { Given } from 'cypress-cucumber-preprocessor/steps'

Given ('the customer is on the homepage', () => {
    cy.visit('')
})