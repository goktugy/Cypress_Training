declare namespace Cypress{
    interface Chainable{

    /** 
    * Goes to the homepage of the URL    
    */

    visitHome() : Chainable <Element>
    
    
    /** 
    * Goes to the World section of the URL    
    */
    visitWorld() : Chainable <Element>

    /** 
    * Goes to the Politics section of the URL    
    */
    visitPolitics () : Chainable <Element> 

    }

}

Cypress.Commands.add("visitHome", ()=>{
    cy.visit("http://www.cnn.com")
})

Cypress.Commands.add("visitWorld", ()=>{
    cy.visit("http://www.cnn.com/world")
})


Cypress.Commands.add("visitPolitics", ()=>{
    cy.visit("http://www.cnn.com/politics")
})