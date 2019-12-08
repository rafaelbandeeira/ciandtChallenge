import { And, When, Then } from 'cypress-cucumber-preprocessor/steps'

And ('user clicks on the Add to cart buttom', () => {
    cy.scrollTo(0, 550)
    cy.xpath('//*[@id="homefeatured"]/li[4]')
      .contains('Add to cart')
      .click()
    cy.contains('Continue shopping')
      .click()

    cy.xpath('//*[@id="homefeatured"]/li[6]')
      .contains('Add to cart')
      .click()
})

When ('they go to the cart', () => {
    cy.contains('Proceed to checkout')
      .click()  
})

Then ('the products should be displayed', () => {
    cy.get('#summary_products_quantity')
      .text()
      .should('include', '2 Products')

    cy.get('.btn-default.standard-checkout')
      .should('be.visible')
})

