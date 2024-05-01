describe('Iteratiing Through A Table', () => {
  
    before( () => {
      cy.visit('https://www.w3schools.com/html/html_tables.asp')
    })

     it("List through the table", () =>{
      let values = []
      debugger
      cy.get('#customers')
      .find('th')
      .each(($el, $index) => {
        cy.wrap($el)
         .invoke('text')
         .then(text => {
               values.push(text.trim())
             })
          })
         .then(() => expect(values).to.deep.eq(["Company", "Contact", "Country"]))
       

        }) 

})