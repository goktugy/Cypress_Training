describe('Button Interactions Example', ()=>{
  it('Clicking a search button', () => {
         cy.visit('https://www.google.com', 10000)
         cy.fixture("company").then(corporation =>{
           const name = corporation.name         
          cy.get('.gLFyf').type(name)
          cy.contains('Google Search')
            .click( {force:true})
          cy.contains('Garmin').should('be.visible') 
  
        })
    })
})