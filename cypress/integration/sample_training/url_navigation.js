describe('Simple Navigation Example', () =>{
  it("Browsing to CNN Page", () => {
      cy.visit('https://www.cnn.com', 5000)
  })

   it('should load correctly',()=>{
     cy.url().should("include", "cnn.com")
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