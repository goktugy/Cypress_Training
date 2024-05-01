describe("Testing A Simple Restfful API", () =>{
  it("Get Single User Should Work", ()=>{
      cy.request('/users/2').then((response) => {
          cy.log(JSON.stringify(response.header))
          cy.log(JSON.stringify(response.body))
      })
  })
   
  it("Must have correct header info", ()=>{
     cy.request('/users/2').as('user')
     cy.get('@user')
     .its('headers')
     .its('content-type')
     .should('include','application/json')

     cy.get('@user')
     .its('headers')
     .its('connection')
     .should('include','keep-alive')

  })

  it('must have the correct status code', () => {
       cy.request({url:'/users?page=2', method: 'Get'}).as('users_list') 
        cy.get('@users_list').then(response => {
            expect(response.status).to.equal(200)
            cy.log(JSON.stringify(response.headers))
            cy.log(JSON.stringify(response.body))
          })
  })

})