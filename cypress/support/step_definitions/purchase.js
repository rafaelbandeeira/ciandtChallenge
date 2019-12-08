import { And, Then } from 'cypress-cucumber-preprocessor/steps'
import { randomNumber } from './functions/globalFunctions'

And ('proceeds to checkout', () => {
    // SUMMARY
    cy.get('.standard-checkout')
      .click()
    //SIGN IN
    cy.get('#email')
      .type('bruce@waynecorp.com')
    cy.get('#passwd')
      .type(123456)
    cy.get('#SubmitLogin')
      .click()
    //ADDRESS
    cy.scrollTo(0, 600)
    cy.get('#ordermsg')
      .find('.form-control')
      .type('Wrap it in an all-black paper.')
     cy.get('#center_column')
       .find('.button-medium')
       .click({force:true})
    //SHIPPING
    cy.get('#cgv')
      .check()
    cy.get('#center_column')
      .find('.button-medium')
      .click({force:true})
    //PAYMENT 
    var choosePayment = randomNumber(10)
    if (choosePayment >= 50 ) {
        cy.get('.bankwire')
          .click()   
    } else {
        cy.get('.cheque')
          .click()  
    } 
})

Then ('an order should be placed', () => {
    cy.get('#center_column')
      .find('.button-medium')
      .click({force:true})
    cy.contains('Your order on My Store is complete')
})
