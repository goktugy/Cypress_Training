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
    * Goes to the Culture section of the URL    
    */
    visitCulture () : Chainable <Element> 

    }

}

Cypress.Commands.add("visitHome", ()=>{
    cy.visit("http://www.bbc.com")
})

Cypress.Commands.add("visitWorld", ()=>{
    cy.visit("http://www.bbc.com/news")
})


Cypress.Commands.add("visitCulture", ()=>{
    cy.visit("http://www.bbc.com/culture")
})