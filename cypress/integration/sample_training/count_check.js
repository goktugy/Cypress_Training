describe('Count Check', ()=>{
  it('Clicking a search button', () => {
         cy.visit('https://www.amazon.ca', 10000)
         cy.get('#twotabsearchtextbox').as('SearchBox')
         cy.get('@SearchBox')
            .clear()
         cy.fixture("books").then(book =>{
             const title = book.Title
             cy.get('@SearchBox')
               .type(title)
            cy.get('#nav-search-submit-button')
              .click()
            cy.writeFile("Test_Automation.log", "Test Case: count_check | Step: Verification \n")
              cy.contains('Da Vinci Code').should('be.visible') 
              cy.writeFile("Test_Automation.log", "Test Case: count_check | Passed \n", {flag:"a+"})
          })
         
  })
 it('Should be listed under 7 book types and under "Suspense" type', () =>{
    cy.reload()
    cy.log("After re-loading")
    cy.get('#departments > ul').children().should('have.length',8)
    cy.get('#departments > ul > li').eq(1).should('contain.text', 'Suspense')

 })

})