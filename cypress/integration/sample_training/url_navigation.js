describe('Simple Navigation Example', () =>{
  beforeEach ( () => {
      cy.visit('https://www.bbc.com', 5000)
   })

   it('should load correctly',()=>{
     cy.url().should("include", "bbc.com")
   })

   it('should have UTF-8 type content',() =>{
      cy.document()
        .its("contentType")
        .should("eq", "text/html")

      cy.document()
        .should("have.property", "charset")
        .and("eq", "UTF-8")    
      })
})