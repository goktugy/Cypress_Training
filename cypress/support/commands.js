// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//Cypress.Commands.add('logintest', (email, password) => {})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('search', (item) => {
    const user = 
     cy.clearCookies()
     cy.clearLocalStorage()
     cy.get('.gLFyf').type(item)
          cy.contains('Google Search')
            .click()
})

/** 
* Checks if an item is visible     
*/

Cypress.Commands.add('isVisible', (selector) => {
  cy.get(selector).should('be.visible')
})

/** 
* Checks if an item is hidden     
*/

Cypress.Commands.add('isHidden', (selector) => {
    cy.get(selector).should('not.exist')
  })

/** 
 * Sets the screen size     
 *  
 */
 Cypress.Commands.add('setSize', size => {
      if(Cypress._.isArray(size)){
        cy.viewport(size[0], size[1])
      }else{
        cy.viewport(size)
      }        
    })