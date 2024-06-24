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
            cy.writeFile("Test_Automation.log", "Test Case: count_check | Step: Visible Verification \n")
              cy.contains('Da Vinci Code').should('be.visible') 
              cy.writeFile("Test_Automation.log", "Test Case: count_check | Visible Verification Passed \n", {flag:"a+"})
              cy.get('#departments > ul > span > span').children().should('have.length',9)
              cy.get('#departments > ul > span > span').children().eq(1).should('contain.text', 'Suspense')
              cy.writeFile("Test_Automation.log", "Test Case: count_check | Departments Check Passed \n", {flag:"a+"})
            })
         
  })
})