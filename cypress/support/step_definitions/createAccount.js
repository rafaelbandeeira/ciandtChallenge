/* import { And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { num_2 } from './functions/globalFunctions'
import { generateFirstName, generateLastName } from './functions/globalFunctions'

const email = `qa_user${num_2}@waynecorp.com`
const firstName = generateFirstName()
const lastName = generateLastName()

And ('tries to create an account', () => {
    cy.get('#create-account_form')
      .find('#email_create')
      .type(email)
    
    cy.get('#SubmitCreate')
      .click()
})

When ('they fill in the form', () => {
    if (["Emma", "Olivia", "Isabella", "Sophia", "Rebeka"].indexOf(firstName) >= 0) {
        cy.get('#id_gender2')
          .check()
    }
    else if (["Niklaus", "Elijah", "Marcellus", "Oliver", "Bruce"].indexOf(firstName) >= 0) {
        cy.get('#id_gender1')
          .check() 
    }
// PERSONAL INFORMATION
    cy.get('#customer_firstname')
      .type(firstName)
    cy.get('#customer_lastname')
      .type(lastName)
    cy.get('#email')
      .should('have.value', email)
    cy.get('#passwd')
      .type(123456)
    cy.get('#days')
      .select(7)
    cy.get('#months')
      .select(12)
    cy.get('#years')
      .select(1994)

// ADDRESS INFORMATION    
    cy.get('#firstname')
      .should('have.value', firstName)
    cy.get('#lastname')
      .should('have.value', lastName)
    cy.get('#address1')
      .type('2517 Del Dew Drive')
    cy.get('#city')
      .type('Lexington Park')
    cy.get('#state')
      .select('Maryland')
    cy.get('#postcode')
      .type(20653)
    cy.get('#id_country')
      .select(21)
    cy.get('#phone_mobile')
      .type('301-863-9127')
    cy.get('#alias')
      .clear()
      .type('Random address found at bestrandoms.com')
    
})

And ('clicks on Register', () => {
    cy.get('#submitAccount')
      .click()
})

Then ('the account should be created', () => {
    cy.url()
      .should('include', 'controller=my-account')
    cy.contains('Sign out')
      .should('be.visible')
    cy.get('#my-account')
      .should('be.visible')
      cy.contains(`${firstName} ${lastName}`)
})

*/