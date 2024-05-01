describe('Working with custom commands', ()=>{
 it("Should be able to search", ()=>{
    const google = 'https://www.google.com'
    cy.visit(google)
    cy.search('Garmin')
 })
})