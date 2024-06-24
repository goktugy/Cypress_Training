describe("This is an example of xpath", () =>{
      it("Should be able to navigate with xpath", () => {

        const baseURL = "https://www.livescore.com"
        cy.visit(baseURL)
        cy.xpath("//*[@id='football-pill']").click({force: true})

   })
})